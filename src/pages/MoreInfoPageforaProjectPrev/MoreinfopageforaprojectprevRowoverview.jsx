import { Button, Text, Heading } from "../../components";
import React from "react";

export default function MoreinfopageforaprojectprevRowoverview() {
  return (
    <div className="mt-[120px] flex items-center md:flex-col">
      <div className="h-[568px] w-full bg-gray-300 md:p-5" />
      <div className="flex w-full flex-col items-start gap-[68px] px-12 md:p-5 md:px-5 sm:gap-[34px]">
        <Heading
          size="heading2xl"
          as="h2"
          style={{color: 'hsl(213, 78%, 16%)'}} //override style for giving the required color
          className="text-[48px] font-bold capitalize text-blue_gray-900_01 md:text-[44px] sm:text-[38px]"
        >
        Overview
        </Heading>
        <div className="flex flex-col items-start gap-8 self-stretch">
          <Heading
            size="headingxs"
            as="h3"
            className="w-[80%] !text-[16px] capitalize leading-8 !text-gray-700 md:w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            magna enim id integer congue e
          </Heading>
          <Text
            as="p"
            className="w- [84%] leading-[26px] !text-gray-600_01 md:w-full"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem et
            lacoo accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo et quasi architecto beatae vitae dicta
            rem aperiam.
          </Text>
        </div>

        <div className="btn flex gap-5">
        <Button
          color="blue_A700"
          size="x1"
          className="ml-1.5 min-w-[282px] rounded-[5px] font-roboto font-bold md:ml-0"
        >
          Polls and Surveys
        </Button>
        <Button
          color="blue_A700"
          size="x1"
          className="ml-1.5 min-w-[282px] rounded-[5px] font-roboto font-bold md:ml-0"
        >
          Read more
        </Button>
        </div>
      </div>
    </div>
  );
}
