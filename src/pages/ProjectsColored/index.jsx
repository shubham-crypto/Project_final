import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RiversideParkDevelopment from "../../components/RiversideParkDevelopment";
import ProjectscoloredRowprojectsOne from "./ProjectscoloredRowprojectsOne";
import React, { Suspense } from "react";

const data = [
    {
        userImage: "images/img_1_52.png",
        title: "Riverside Park Development",
        description:
            "The Riverside Park Development project focuses on transforming the area along the city's riverbank into a vibrant public park. This initiative includes creating walking trails.",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_2_1.png",
        title: "Traffic Management System",
        description:
            "The Smart Traffic Management System project aims to modernize the city's traffic infrastructure by implementing advanced traffic control technologies.",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_3_1.png",
        title: "GreenPulse Park Revitalization",
        description:
            "Transforming underused urban spaces into vibrant green parks with community gardens, walking trails, and playgrounds to enhance local living and community well-being.",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_4_1.png",
        title: "Heritage Revival Project",
        description:
            "Restoring and preserving historical buildings and landmarks to celebrate the city's cultural heritage and boost tourism, while fostering local pride and economic growth.",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_5_1.png",
        title: "Expansion of Public Transit Network",
        description:
            "The Expansion of Public Transit Network project focuses on extending the city's public transportation system.",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_6_1.png",
        title: "SmartCity Hub Initiative",
        description:
            "Integrating advanced technologies to create smart infrastructure for efficient transportation, energy management, and public services in urban areas, enhancing overall quality of life.",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_7_1.png",
        title: "EcoWay Street Upgrade",
        description:
            "Upgrading city streets with eco-friendly materials, sustainable drainage systems, and pedestrian-friendly designs to promote a greener urban environment and active lifestyles.",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_8_1.png",
        title: "Community Connect Plaza",
        description:
            "Developing a central plaza with multipurpose spaces for markets, events, and social gatherings to strengthen community bonds and local economy, fostering civic engagement and unity.",
        seeMoreButton: "See More",
    }
];

export default function ProjectsColoredPage() {
  return (
    <>
      <div className="w-full bg-white-a700 mt-24">
        <Header />
        <div className="flex flex-col items-center gap-[136px] md:gap-[102px] sm:gap-[68px]">
          <ProjectscoloredRowprojectsOne />
          <div className="container-xs p-5 md:p-0">
            <div className="grid md:grid-cols-2 justify-center gap-6 grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <RiversideParkDevelopment {...d} key={"projectscolored" + index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
        <Footer className="mt-[136px]" />
      </div>
    </>
  );
}

