// this file is the main entry point that allows next-auth to be in the app

import NextAuth from "next-auth/next";
import prisma from "../../../../libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

export  const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "moesuo" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text", placeholder: "Mohamed" },
      },
      async authorize(credentials) {
        // Check if email and password are provided
        if (!credentials.email || !credentials.password) {
          throw new Error('Please enter an email and password');
        }
      
        // Check if user exists in the database
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });
      
        // If no user was found
        if (!user || !user.hashedPassword) {
          throw new Error('No user found');
        }
      
        // Check if password matches
        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);
      
        // If password does not match
        if (!passwordMatch) {
          throw new Error('Incorrect password');
        }
      
        return user;
      }, pages: {
        signIn: "/auth/login",
      },
}),  
],
secret: process.env.SECRET,
session: {
strategy: "jwt",
},
debug: process.env.NODE_ENV === "development",
}

export default NextAuth(authOptions);