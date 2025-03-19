import { Button, Text, Heading } from "../../components/index.jsx";
import UserHistorySection from "../../components/UserHistorySection";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense } from "react";

const data = [
  { milCounterText: "50 mil+", localResidentText: "Local Resident" },
  { milCounterText: "3,2k", localResidentText: "Square KM" },
  { milCounterText: "8 mil+", localResidentText: "Foreign Visitors" },
  { milCounterText: "150+", localResidentText: "Tourist attractions" },
];

export default function AboutuscoloredColumnwelcometo() {
  return (
    <div className="mt-[120px] flex flex-col items-center md:gap-[120px] gap-[90px] ">
      <div className="flex items-center justify-between gap-5 self-stretch flex-col md:flex-row">
        <div className="w-full  md:w-[48%] bg-gray-300 p-5 md:p-0">
          <img src="/images/Cimages/about1.jpg" alt="" />
        </div>
        <div className="flex md:w-[46%] flex-col gap-5 w-full p-5 md:p-0">
          <Heading
            size="heading2xl"
            as="h2"
            className="md:w-[74%] md:!text-[48px] !font-bold capitalize leading-[64px] !text-blue_gray-900_01 w-full !text-[38px]"
          >
            Welcome to Civique
          </Heading>
          <div className="flex flex-col items-start gap-8">
            <Heading
              size="headingxs"
              as="h3"
              className="md:w-[74%] !text-[16px] capitalize leading-8 !text-gray-700 w-full"
            >
              At Civique, we believe in the power of community involvement and
              transparent urban planning. Our mission is to provide a platform
              where citizens and local governments can collaborate to shape the
              future of their cities. We are committed to fostering an inclusive
              and engaging environment that empowers individuals to participate
              actively in urban development.
            </Heading>
            <Text
              as="p"
              className="md:w-[78%] leading-[26px] !text-gray-600_01 w-full"
            >
              With our innovative tools and features, Civique ensures that every
              voice is heard <br /> and valued. Join us to build sustainable,
              vibrant, and resilient cities together.
            </Text>
          </div>
        </div>
      </div>
      <div className="container-xs flex flex-col gap-[158px] md:gap-[118px] md:p-5 sm:gap-[79px]">
        <div className="md:ml-16 md:mr-20 flex gap-2 mx-0 flex-col items-center justify-center md:flex-row">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile2
                {...d}
                key={"milestone" + index}
              />
            ))}
          </Suspense>
        </div>
        <div className="flex items-center flex-col md:flex-row">
          <div className="flex w-full flex-col items-start gap-8 mr-2 mb-2">
            <Heading
              size="heading2xl"
              as="h4"
              className="md:w-[80%] !text-[48px] !font-bold capitalize leading-[64px] !text-black-900 w-full md:!text-[44px] sm:!text-[38px]"
            >
              Leading the Way in <br /> Urban Innovation
            </Heading>
            <Text
              as="p"
              className="md:w-[80%] leading-[26px] !text-gray-600_01 w-full"
            >
              Civique: Setting the Standard for Citizen Engagement and <br />{" "}
              Transparent Urban Planning! Celebrating 5 Years of <br />{" "}
              Excellence and Community Collaboration!
            </Text>
            <Button
              color="deep_orange_A700"
              shape="square"
              className="min-w-[166px] font-bold"
            >
              Learn More
            </Button>
          </div>
          <div className="flex w-full gap-4 flex-col md:flex-row">
            <UserHistorySection image="/images/Cimages/ourhistory.jpg" />
            <UserHistorySection image="/images/Cimages/aboutus.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
