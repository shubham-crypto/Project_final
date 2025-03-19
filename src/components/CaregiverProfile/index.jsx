import React from "react";
import { Heading, Text, Img } from "./..";

export default function CaregiverProfile({
  headlineText = "Caregivers are essential workers. It&#39;s time we recognize them as such",
  dateText = "14 Feb",
  categoryText = "News",
  descriptionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
  readMoreLink = "Read More",
  src = "images/img_1_52.png",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center md:w-[32%] w-full gap-6 bg-white-a700`}
    >
      {/* <div className="h-[400px] w-[400px] bg-gray-300" /> */}
      <Img className="h-[400px] w-[400px]" src={src} alt="Community Feedback" />
      <div className="mx-auto mb-[26px] flex flex-col items-start gap-[18px] max-w-[400px] self-stretch ">
        <Heading
          as="h4"
          className="w-full !text-[24px] capitalize leading-[38px] !text-blue_gray-900_01"
        >
          {headlineText}
        </Heading>
        <div className="flex items-center self-stretch">
          <Text size="textxs" as="p" className="!text-[14px] !text-gray-600_01">
            {dateText}
          </Text>
          <div className="ml-1.5 h-[4px] w-[4px] rounded-sm bg-gray-600_01" />
          <Text
            size="textxs"
            as="p"
            className="ml-2 !text-[14px] !text-gray-600_01"
          >
            {categoryText}
          </Text>
        </div>
        <Text as="p" className="leading-[26px] !text-gray-600_01">
          {descriptionText}
        </Text>
        <a href="#">
          <Heading
            size="headingxs"
            as="h6"
            className="text-[16px] !font-bold !text-gray-600"
          >
            {readMoreLink}
          </Heading>
        </a>
      </div>
    </div>
  );
}
