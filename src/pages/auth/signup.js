import Head from "next/head";
import Form from "@/components/form/form";
import LayoutLeftImage from "@/components/layoutLeftImage";
import Button from "@/components/button/button";
import Checkbox from "@/components/form/checkbox/checkbox";
import Image from "next/image";
import logo from "/public/images/logo-box.png";
import Link from "next/link";
import { useRouter } from "next/router";
//backend
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios"; // to send http requests to backend / alternative to fetch method
//backend

export default function SignUp() {
  const title = 'Sign up for PlantApp';
  const linkText = 'Have you not an account';
  const linkTitle = 'Sign in';
  const router = useRouter();
  const doSubmit = async (formValue) => {
    //backend
    axios
      .post('/api/signup', formValue)
      .then(() => {
        console.log('User has been registered!');
        toast.success('User has been registered!');
        router.push("/auth/login");
      })
      .catch(() => {
        console.log('An error occurred!');
        toast.error('An error occurred!');
      });
      //backend
  };
  

  return (
    <LayoutLeftImage>
      <Head>
        <title>Signup</title>
      </Head>

      <div className="card px-10 py-20 shadow-xl min-w-[70%]">
      <Image
            src={logo}
            alt="logo image"
            priority
            className="mb-14 mx-auto"
            width={150}
          />
        <div className="form ">
          <p className="text-xl mb-6">{title}</p>
          <div className="flex flex-col w-full component-preview items-center gap-4 font-roboto">
            <Form
              onSubmit={doSubmit}
              fields={[
                {
                  type: "text",
                  placeholder: "Your Full Name",
                  name: "name",
                  label: "Name",
                  required: true,
                },
                {
                  type: "email",
                  placeholder: "Email",
                  name: "email",
                  label: "E-mail address",
                  required: true,
                },
                {
                  type: "password",
                  placeholder: "Password",
                  name: "password",
                  label: "Password",
                  required: true,
                },
              ]}
            >
              <Checkbox />
              <div className=" w-full">
                <Button >SIGN UP</Button>
              </div>
            </Form>

            <div className=" w-full flex">
              <span className="flex flex-row justify-normal text-xs gap-2">
                <p>{linkText}</p> <Link href='/auth/login' className="link text-[#5850EC]">{linkTitle}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </LayoutLeftImage>
  );
}
