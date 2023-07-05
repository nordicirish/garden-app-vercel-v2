import Button from "@/components/button/button";
import Form from "@/components/form/form";
import LayoutLeftImage from "@/components/layoutLeftImage";
import Head from "next/head";
import Image from "next/image";
import logo from "/public/images/logo-box.png";

export default function ResetPassword(){
    const doSubmit = (formValue) => {
        console.warn(formValue);
      };
    const title= 'Reset Password';
    return(
        <LayoutLeftImage>
            <Head><title>Reset Password</title></Head>
            <div className="card relative px-10 py-16 shadow-xl min-w-[70%]">
      
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
                  type: "email",
                  placeholder: "Email",
                  name: "email",
                  label: "E-mail address",
                  required: true,
                },
              ]}
            >
              <div className="w-full">
                <Button>SEND</Button>      
              </div>
            </Form>
          </div>
        </div>
      </div>

        </LayoutLeftImage>
    )
}