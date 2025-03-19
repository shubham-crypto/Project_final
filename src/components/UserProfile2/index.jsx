import { Text, Heading } from "./..";
import React from "react";

export default function UserProfile2({ milCounterText = "50 mil+", localResidentText = "Local Resident", ...props }) {
return (
  <div {...props} className={`${props.className} flex flex-col items-end w-fit md:w-full gap-2 `}>
    <Heading size="heading2x1" as="h1" className="!text-[48px] !font-bold capitalize !text-blue_gray-900_01">
      {milCounterText}
    </Heading>
    <Text as="p" className=" !text-gray-600_01">
      {localResidentText}
    </Text>
  </div>
);
}