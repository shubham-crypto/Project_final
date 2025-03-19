import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Heading, Text, Button, Img } from "../../components/index";
import { Link } from "react-router-dom";

const eventsData = [
    {
        image: "images/Cimages/Home-UpcomingEvents1.png",
        title: "Webinars For Urban Development",
        description:
            "Upcoming Webinars on Sustainable Urban Development, Innovative Solutions, Modern Challenges, Green Infrastructure, and Future-Ready Communities.",
    },
    {
        image: "images/Cimages/Home-UpcomingEvents4.jpg",
        title: "Discussion For Progress Reports",
        description:
            "An In-Depth Analysis of Achievements, Challenges, Milestones, Data Insights, Performance Metrics, Future Goals, Strategic Planning, and Continuous Improvement.",
    },
    {
        image: "images/Cimages/Home-UpcomingEvents3.jpg",
        title: "Organizing Urban Development Workshops",
        description:
            "Hands-On Training, Expert Insights, Innovative Solutions, Community Engagement, Green Infrastructure, Smart City Planning, and Sustainable Urban Growth.",
    },
    {
        image: "images/Cimages/Home-UpcomingEvents2.jpeg",
        title: "Regular Meetings For Discussing Issues",
        description:
            "Collaborative Problem-Solving, Stakeholder Engagement, Real-Time Feedback, Progress Tracking, Community Input, and Data-Driven Decisions.",
    },
];

export default function UpcomingEvents() {
    return (
        <>
        <Header/>
        <div className="container mx-auto px-5 py-28">
            <Heading size="heading2xl" as="h1" className="text-center font-bold text-blue_gray-900_01">
                Upcoming Events
            </Heading>
            <Text as="p" className="text-center text-gray-600_01 mt-4">
                Stay informed about the latest events shaping our community.
            </Text>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
                {eventsData.map((event, index) => (
                    <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
                        <Img src={event.image} alt={event.title} className="w-full h-60 object-cover rounded-md" />
                        <Heading size="headingLg" as="h2" className="mt-4 text-blue_gray-900_01">
                            {event.title}
                        </Heading>
                        <Text as="p" className="text-gray-600_01 mt-2">{event.description}</Text>
                        <Button color="gray_600" shape="square" className="mt-4">
                            Learn More
                        </Button>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
}
