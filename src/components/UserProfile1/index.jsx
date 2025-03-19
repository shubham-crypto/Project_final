import { Text, Heading, Button } from "./.."; // Fixed import: removed 'Ing' since it is not defined
import React from "react";

export default function UserProfile1({
  reactionbutton1 = "4",
  reactionbutton2 = "2",
  reactionbutton3 = "1",
  descriptionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  userName = "Esther Howard",
  readMoreLink = "Read more",
  reactionButton1Image = "images/reaction1.png", // add image props
  reactionButton2Image = "images/reaction2.png",
  reactionButton3Image = "images/reaction3.png",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start md:w-[58%] w-full gap-2.5 px-18 py-2 sm:px-5 bg-white-a788 rounded-[28px]`}
    >
      <div className="h-[30px] flex gap-2 self-stretch">
        {" "}
        {/* Fixed class name from 'nt-[30px]' */}
        <Button size="xs" shape="round" className="min-w-[48px] font-lato">
          <img
            src={"/reactionimage/image.png"}
            alt=""
            className="h-[20px] w-[20px]"
          />
          {reactionbutton1}
        </Button>
        <Button size="xs" shape="round" className="min-w-[48px] font-lato">
          <img
            src={"/reactionimage/image2.png"}
            alt=""
            className="h-[20px] w-[20px]"
          />
          {reactionbutton2}
        </Button>
        <Button size="xs" shape="round" className="min-w-[48px] font-lato">
        <img
            src={"/reactionimage/image3.png"}
            alt=""
            className="h-[20px] w-[20px]"
          />
          {/* Fixed class name from 'min-w-[480px]' */}
          {reactionbutton3}
        </Button>
      </div>
      <div className="flex items-center gap-2.5 self-stretch">
        {" "}
        {/* Fixed 'Flex' to 'flex' */}
        <Text
          size="textxl"
          as="p" // Fixed 'as-"p"' to 'as="p"'
          className="w-[88%] !font-roboto leading-[27px] !text-black-900 sm:w-[88%] sm:text-[15px]" // Fixed class names and syntax
        >
          {descriptionText}
        </Text>
        <img
          src="images/img_avatar_100x100.png" // Fixed 'Ing' to 'img'
          alt="Image"
          className="h-[108px] w-[108px] rounded-[58px] object-cover" // Fixed class name from '-[188px]' to 'w-[108px]'
        />
      </div>
      <Heading
        size="headinglg"
        as="h3" // Fixed 'as-"h3"' to 'as="h3"'
        className="!font-roboto !text-[28px] !font-black !text-black-900 sm:!text-[23px]" // Fixed class names and syntax
      >
        {userName}
      </Heading>
      <a href="#" className="sm:text-[17px]">
        <Text size="text2x1" as="p" className="!text-black-900_cc">
          {readMoreLink}
        </Text>
      </a>
    </div>
  );
}
