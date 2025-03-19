
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import React from "react";
import Footer from "../../components/Footer";
import { Heading } from "../../components";
import { Main } from "./components/Main";
import { Message } from "./components/Message";

export default function ContactUsPage() {
  return (
    <>
      <div className="w-full bg-white-a700 h-screen ">
        <Header />
        <div className='mx-20 md:mx-36'>
          <Main/>
          <Message/>
        </div>
        <Footer/>
      </div>
    </>
  );
}
