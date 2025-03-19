import { Text, Heading } from "../../components";

import React from "react";

export default function AboutuscoloredRowaboutusOne() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-900_cc md:py-36 py-5">
        <div className="container-xs mt-5 flex flex-col items-start gap-6 p-5 md:p-0">
          <Heading size="heading3x1" as="h1" className="capitalize">
            About Us
          </Heading>
          <Text as="p" className="leading-[26px]">
            <>
              Discover our commitment to enhancing community engagement and
              participatory <br />
              democracy through innovative platforms.
            </>
          </Text>
        </div>
      </div>
    </div>
  );
}
