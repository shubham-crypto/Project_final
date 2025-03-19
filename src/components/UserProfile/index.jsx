import { Text, Heading, Img } from "./..";

import React from "react";

export default function UserProfile({
  userImage = "images/img_hospital.svg",
  userName = "Lorem ipsum",
  userDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, the sed do eiusmod tempor elit et incididunt ut labore et dolore",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full gap-7 p-8 sm:p-5 bg-gray-50_01 cursor-pointer hover:shadow-xs`}
    >
      <div className="flex flex-col items-center rounded-[40px] bg-teal-50 p-5">
        <Img src={userImage} alt="Lorem Ipsum" className="h-[40px] w-[40px]" />
      </div>
      <div className="flex flex-col items-start gap-2 self-stretch">
        <Heading as="h4" className="!text-[24px] capitalize !text-blue_gray-900_01">
          {userName}
        </Heading>
        <Text as="p" className="w-full leading-[26px] !text-gray-600_01">
          {userDescription}
        </Text>
      </div>
    </div>
  );
}