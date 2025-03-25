import { Button, Text, Heading, Img } from "./../index.jsx";

import React from "react";
import { Link } from "react-router-dom";
export default function RiversideParkDevelopment({
  id,
  userImage = "images/img_1_52.png",
  title = "Riverside Park Development",
  description = "The Riverside Park Development project focuses on transforming the area along the city's riverbank into a vibrant public park. This",
  seeMoreButton = "See More",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} md:h-[590px] w-full h-auto relative`}
    >
      <Img
        src={userImage}
        alt="Image"
        className="mx-auto h-[590px] w-full flex-1 object-cover"
      />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 m-auto  flex-1 bg-blue_gray-800_b2
      bg-blend-lighten px-10 md:py-[115px] py-5 "
      >
        <div className="mt-16 flex flex-col gap-4 sm:gap-4 ">
          <Heading
            size="heading2x1"
            as="h1"
            className="md:w-[94%] !text-[48px] !font-bold capitalize leading-[64px] w-full "
          >
            {title}
          </Heading>
          <div className="flex flex-col items-start">
            <Text
              as="p"
              className="w-full leading-[26px] sm:w-full sm:text-[13px]"
            >
              {description}
            </Text>
            <Link to={`/project/${id}`}>
              <Button
                color="deep_orange_A700"
                shape="square"
                className="relative mt-[12px] min-w-[150px] font-bold"
              >
                {seeMoreButton}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
