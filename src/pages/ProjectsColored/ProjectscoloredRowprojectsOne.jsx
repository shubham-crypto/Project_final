import { Text, Heading } from "../../components";
import React from "react";

export default function ProjectscoloredRowprojectsone() {
  return (
    <div className="self-stretch">
      <div className="flex flex-col items-center justify-center bg-blue_gray-800_cc md:py-36 py-5">
        <div className="container-xs mt-5 flex flex-col items-start gap-6 md:p-5">
          <Heading size="heading3x1" as="h1" className="capitalize">
            Projects Section
          </Heading>
          <Text as="p" className="leading-[26px]">
            <>
              Explore and Shape Your City: Dive Into Detailed Urban Development <br />
              Projects and Join the Conversation for a Better Future
            </>
          </Text>
        </div>
      </div>
    </div>
  );
}
