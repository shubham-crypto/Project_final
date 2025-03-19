import React from "react";
import { Heading, Text } from "../../components";

export default function HighlightedProjects({
  highlightedText = "Highlighted Projects",
  descriptionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus ut condimentum feugiat at urn et.",
  moreInfoText = "More info",
  imageUrl = "/images/Cimages/project.png",
  ...props
}) {
  return (
    <div
      className={`${props.className} flex flex-col items-start justify-center w-[24%] md:w-full px-6 py-8 sm:p-5 bg-white-a700 cursor-pointer hover:shadow-xs`}
      {...props}
    >
      <div className="h-[64px] w-[64px] rounded-[32px] bg-white-a700 m-2">
        <img src={imageUrl} alt={highlightedText} />
      </div>
      <Heading
        as="h4"
        className="mt-11 !text-[24px] capitalize !text-black-900 px-[10px]"
      >
        {highlightedText}
      </Heading>
      <Text
        as="p"
        className="mt-3.5 w-full leading-[26px] !text-black-900 px-[10px]"
      >
        {descriptionText}
      </Text>
      <Heading
        size="headingxs"
        as="h6"
        className="mt-5 !text-[16px] !font-bold !text-black ml-[5px]"
      >
        {moreInfoText}
      </Heading>
    </div>
  );
}
