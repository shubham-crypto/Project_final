import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GisintegrationwindowcoloredRowmapview from "./GisintegrationwindowcoloredRowmapview";
import React from "react";

export default function GISIntegrationWindowColoredPage() {
    return (
        <>
            <div className="w-full bg-white-a700">
                <Header />
                <GisintegrationwindowcoloredRowmapview />
                <Footer className="mt-[100px]" />
            </div>
        </>
    );
}