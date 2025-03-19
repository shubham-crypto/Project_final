
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import React from "react";
import Footer from "../../components/Footer";
import { Heading } from "../../components";

export default function ContactUsPage() {
  return (
    <>
      <div className="w-full bg-white-a700 h-screen ">
        <Header />
        <div className="flex flex-col items-center justify-center mt-24 bg-blue_gray-800_cc md:py-24 py-5">
          <div className="container-xs flex flex-col items-start gap-6 p-5">
            <Heading size="heading3x1" as="h1" className="capitalize">
              Get In Touch
            </Heading>
            <div className="bg-white rounded-lg p-6 shadow-sm w-[70%] md:w-1/2 xl:w-1/3 bg-white-a700_e5">
             
              <form className="flex flex-col items-center justify-center gap-6 mt-5 w-[80%]">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full !h-[40px] !p-2 !rounded-lg !border  focus:!border-white-a700 focus:!shadow-sm focus:!shadow-blue_gray-800"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full !h-[40px] !p-2 !rounded-lg !border  focus:!border-white-a700 focus:!shadow-sm focus:!shadow-blue_gray-800"
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-2 rounded-lg !border  focus:!border-white-a700 focus:!shadow-sm focus:!shadow-blue_gray-800 h-[88px]"
                />
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-800 !text-white-a700 font-bold py-2 px-4 rounded-lg hover:!shadow-blue_gray-800 hover:!shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
