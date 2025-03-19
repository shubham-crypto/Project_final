import { Img, Heading } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React from "react";

export default function MoreinfopageforaprojectprevColumnheading() {
  return (
    <div className="mt-[120px] flex flex-col items-center gap-[50px] md:px-14 px-5">
      <Heading
        size="headingxl"
        as="h2"
        className="bg-gradient-to-r from-yellow-400 to-yellow-200  md:px-[34px]  py-4 !text-gray-900_03 px-5 "
      >
        Vote on community ideas
      </Heading>
      <div className="mr-9 flex items-center self-stretch md:mr-0 flex-col md:flex-row">
        <div className="flex flex-1 flex-col items-center p-1 md:self-stretch">
          <Img
            src="images/img_vector.svg"
            alt="Vector"
            className="h-[12px] w-[12px]"
          />
        </div>
      </div>
      <div className="flex md:w-[96%] md:flex-row gap-10 w-full flex-col">
        <UserProfile1 />
        <UserProfile1 />
      </div>
      <div className="flex flex-1 flex-col items-center p-1 md:self-stretch">
        <Img
          src="images/img_vector_blue_gray_800.svg"
          alt="Vector"
          className="h-[12px] w-[12px]"
        />
      </div>
    </div>
  );
}
