import { Text, Heading } from "../../components";
import CaregiverProfile from "../../components/CaregiverProfile";
import React, { Suspense } from "react";

const data = [
    {
        headlineText: "Riverside Park Development",
        dateText: "14 April",
        categoryText: "News",
        descriptionText: (
            <>
                Excited about the #RiversideParkDevelopment! Love the plans for more
                
                 green spaces and community areas. Can't wait to see this project come 
                 
                 to life!
                 <br /> #UrbanPlanning #Civique
            </>
        ),
        src:"images/img_1_52.png",
        readMoreLink: "Read More",
    },
    {
        headlineText: "Community Connect Plaza",
        dateText: "14 May",
        categoryText: "News",
        descriptionText: (
            <>
                Excited for the #CommunityConnectPlaza! A new hub for social
                gatherings, events, and activities. It's going to be the heart of our neighborhood! 
                <br /> #CommunityEngagement #Civique
            </>
        ),
        src:"images/img_8_1.png",
        readMoreLink: "Read More",
    },
    {
        headlineText: "Heritage Revival Project",
        dateText: "24 Feb",
        categoryText: "News",
        descriptionText: (
            <>
                Thrilled about the #HeritageRevivalProject! Preserving 
                <br />our history while making spaces vibrant and accessible. Can't wait to see the transformation! 
                <br /> #UrbanPlanning #Civique

            </>

        ),
        src:"images/img_4_1.png",
        readMoreLink: "Read More",
    },
];

export default function HomepagecolouredColumnEight() {
    return (
        <div className="flex flex-col items-center">
            <div className="container-xs flex flex-col gap-20 ">
                <div className="md:mx-[264px] flex flex-col items-center gap-6 mx-0">
                    <Heading
                        size="heading2xl"
                        as="h2"
                        className="md:!text-[48px] !font-bold capitalize !text-blue_gray-900_01 text-[44px] "
                    >

                        Community Feedback

                    </Heading>

                    <Text as="p" className="w-full leading-[26px] !text-gray-600_01">
                    Engage with the community and amplify your voice in local projects. Join  Community Feedback section to <br /><span className="md:ml-[200px]">share insights and opinions on local initiatives</span>
                    </Text>

                </div>
                <div className="flex gap-4 flex-col md:flex-row">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                            <CaregiverProfile {...d} key={"listcaregiversa" + index} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}