import { Helmet } from "react-helmet";
import { Button, Text, Heading } from "../../components/index.jsx";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HighlightedProjects from "../../components/HighlightedProjects";
import HomepagecolouredColumnEight from "./HomepagecolouredColumnEight";
import HomepagecolouredColumnFour from "./HomepagecolouredColumnFour";
import HomepagecolouredRowcurrent from "./HomepagecolouredRowcurrent";
import HomepagecolouredRowhighlighted from "./HomepagecolouredRowhighlighted";
import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";

const data = [
    {
        highlightedText: "Highlighted Projects",
        descriptionText:
            "Community engagement and participatory democracy transformed this area into a thriving urban development.",
        moreInfoText: "More info ",
    },
    {
        highlightedText: "Current Projects",
        descriptionText:
            "Local governments are involving communities in urban planning for transparency and sustainability.",
        moreInfoText: "More info ",
    },
    {
        highlightedText: "Community Feedback",
        descriptionText:
            "Community feedback shapes urban development projects through participatory democracy and public consultation",
        moreInfoText: "More info ",
    },
    {
        highlightedText: "Upcoming Events",
        descriptionText:
            "Join community events, have a say in local government decisions, and shape city planning projects",
        moreInfoText: "More info ",
    },
];

export default function HomePageColouredPage() {
    const navigate=useNavigate();
    return (
        <>
            <div className="w-full bg-white-a700">
                <Header />
                <div className="flex flex-col gap-24 md:gap-32  mt-24">
                    <div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col items-center self-stretch bg-blue_gray-800_cc md:py-20 py-10">
                                <div className="container-xs mb-20 flex flex-col items-start p-5 md:p-0">
                                    <Heading size="heading3x1" as="h1" className="capitalize leading-tight">
                                        <>
                                            Join the movement
                                            <br />
                                            Make your voice heard
                                        </>
                                    </Heading>
                                    <Text as="p" className="mt-6 leading-relaxed ">
                                        <>
                                            Engage with your community, share your ideas, and work towards building <br />a more inclusive,
                                            sustainable future for all.
                                        </>
                                    </Text>
                                    <Button color="gray_600" shape="square" className="mt-14 w-full md:max-w-[166px] font-bold" onClick={() => {navigate('/survey')}}>
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                            <div className="container-xs relative mt-[-106px] md:p-5">
                                <div className="flex gap-4 flex-col md:flex-row mt-28 md:mt-0">
                                    <Suspense fallback={<div>Loading feed...</div>}>
                                        {data.map((d, index) => (
                                            <HighlightedProjects {...d} key={"listiconone" + index} className="shadow-xs hover:shadow-xs" />
                                        ))}
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                        <HomepagecolouredRowhighlighted />
                        <HomepagecolouredRowcurrent />
                        <HomepagecolouredColumnFour />
                    </div>
                    <HomepagecolouredColumnEight />
                </div>
                <Footer className="mt-24" />
            </div>
        </>
    );
}
