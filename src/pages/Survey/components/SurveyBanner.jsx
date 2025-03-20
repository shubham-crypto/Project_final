import { Button, Img, Heading } from "../../../components";
import React from "react";

export default function SurveyBanner() {
  const handleScrollToDiscussion = () => {
    document.getElementById("discussion-forum")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="mt-24">
      <div className="flex flex-col items-start justify-center bg-gradient-to-r from-yellow-400 to-yellow-200 p-32">
        <Heading
          size="headings"
          as="h2"
          className="!font-plusjakartasans !text-[18px] uppercase tracking-[5.04px] !text-blue_gray-800_01"
        >
          Get Involved in Your Community
        </Heading>
        <Heading
          size="heading2x1"
          as="h3"
          className="mt-3.5 leading-[60px] !text-gray-900_03"
        >
          <>
            Participate in Urban Planning
            <br />
            Make a difference
          </>
        </Heading>
        <Button
          color="deep_orange_A700"
          size="md"
          onClick={handleScrollToDiscussion}
          rightIcon={
            <Img
              src="images/img_arrowright.svg"
              alt="Arrow Right"
              className="h-[16px] w-[16px]"
            />
          }
          className="mt-7  min-w-[188px] gap-2 rounded-[5px] font-roboto font-bold"
        >
          Submit a Proposal
        </Button>
      </div>
    </div>
  );
}
