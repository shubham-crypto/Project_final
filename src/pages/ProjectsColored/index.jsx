import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RiversideParkDevelopment from "../../components/RiversideParkDevelopment";
import ProjectscoloredRowprojectsOne from "./ProjectscoloredRowprojectsOne";
import React, { Suspense } from "react";
import { projects } from "./ProjectsData";


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
                {projects.map((d, index) => (
                  <RiversideParkDevelopment {...d} key={"projectscolored" + index}  id={d.id}  />
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

