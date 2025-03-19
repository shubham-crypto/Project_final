import { useNavigate } from "react-router-dom";
import { Button, Text, Heading, Img } from "../../components";
import React from "react";

export default function HomepagecolouredRowhighlighted() {
  const navigate=useNavigate();
  return (
    <div className="mt-[62px] flex items-center justify-between gap-5 flex-col md:flex-row">
      <div className="flex md:w-[48%] justify-center bg-gray-300  w-full p-5 md:p-0">
        {/* <Button color="white_A700" size="1g" shape="circle" className="w-[56px] !rounded-[28px]"> */}
          <Img src="images/Cimages/Home-RegionalProjects.jpg" alt="Regional Projects" className="h-full w-full"/>
        {/* </Button> */}
      </div>
      <div className="flex md:w-[46%] flex-col items-start w-full p-5 md:p-0">
        <Heading
          size="heading2xl"
          as="h2"
          className="!text-[48px] !font-bold capitalize leading-[64px] !text-blue_gray-900_01 md:!text-[44px] sm:!text-[38px]"
        >
          <>
            Highlighted regional
            <br />
            projects{" "}
          </>
        </Heading>
        <Text as="p" className="mt-6 w-[78%] leading-[26px] !text-gray-600_01 md:w-full">
        Explore Highlighted Projects to see how participatory budgeting is transforming local government decision-making. Discover how citizen participation and community engagement are shaping urban development and city planning. Learn about public consultation processes, project proposal submissions, idea voting,public feedbacks and budget transparency. 
        </Text>
        <Button color="gray_600" shape="square" className="mt-14 min-w-[238px] font-bold" onClick={()=>navigate("/about")}>
          Learn More about us
        </Button>
      </div>
    </div>
  );
}