import Image from "next/image";
import Layout from "./layout";
import defaultImage from "/public/images/left-box.jpg";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function LayoutLeftImage({ children, image }) {

  return (
    <Layout>
      <div className={roboto.className}>

      
      <div className=" flex h-screen w-screen">
        <div className="relative flex w-1/2">
          <Image
            src={image || defaultImage}
            alt="bacground image"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative flex items-center justify-center w-1/2 p-4 overflow-y-scroll">
          {children}
        </div>
      </div>
      </div>
    </Layout>
  );
}
