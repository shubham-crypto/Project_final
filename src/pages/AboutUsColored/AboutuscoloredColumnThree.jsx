import { Button, Text, Heading } from "../../components/index.jsx";
import React from "react";

export default function AboutuscoloredColumnThree() {
  return (
    <div className="mt-40 flex flex-col items-center">
      <div className="container-xs flex flex-col items-center md:gap-20 gap-[60px] p-5 md:p-0 ">
        <div className="md:mx-[264px] flex flex-col items-center gap-6 self-stretch mx-0">
          <Heading
            size="heading2xl"
            as="h2"
            className="md:!text-[48px] !font-bold capitalize !text-blue_gray-900_01 !text-[38px]"
          >
            Discover Civique's Impact
          </Heading>
          <Text
            as="p"
            className="self-stretch text-center leading-[26px] !text-gray-600_01"
          >
            Experience the Future of Urban Planning and Citizen Engagement. Our
            platform empowers communities to shape their cities through
            interactive tools and real-time collaboration. Join us in creating
            sustainable, inclusive, and vibrant urban spaces for everyone.
          </Text>
        </div>
        <Button
          color="deep_orange_A700"
          shape="square"
          className="min-w-[162px] font-bold"
        >
          Explore All
        </Button>
      </div>
    </div>
  );
}
