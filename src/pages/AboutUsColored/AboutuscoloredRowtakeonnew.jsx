import { Button, Text, Heading } from "../../components";
import React from "react";

export default function AboutuscoloredRowtakeonnew() {
  return (
    <div className="mt-40">
      <div className="flex flex-col items-center justify-center bg-gray-900_02 py-20 md:py-5">
        <div className="container-xs flex flex-col items-center px-14 md:p-5 md:px-5">
          <Heading
            size="heading2xl"
            as="h2"
            className="!text-[48px] ! font-bold capitalize md:!text-[44px] sm:!text-[38px]"
          >
            Embrace New Opportunities
          </Heading>
          <Text as="p" className="mt-6 self-stretch text-center leading-[26px]">
          Enhancing Urban Development through Community Feedback and Collaboration — Balancing the needs of a growing population with sustainable practices. Our platform ensures inclusive planning, efficient resource management, and the promotion of green spaces for a better future.
          </Text>
          <Button color="deep_orange_A700" shape="square" className="mt-14 min-w-[186px] font-bold">
            Join Volunteer
          </Button>
        </div>
      </div>
    </div>
  );
}