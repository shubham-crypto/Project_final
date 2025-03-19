import { Helmet } from "react-helmet";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MoreinfopageforaprojectprevColumnheading from "./MoreinfopageforaprojectprevColumnheading";
import MoreinfopageforaprojectprevColumnheading1 from "./MoreinfopageforaprojectprevColumnheading1";
import MoreinfopageforaprojectprevRow from "./MoreinfopageforaprojectprevRow";
import MoreinfopageforaprojectprevRowgetinvolvedi from "./MoreinfopageforaprojectprevRowgetinvolvedi";
import MoreinfopageforaprojectprevRowoverview from "./MoreinfopageforaprojectprevRowoverview";
import MoreinfopageforaprojectprevRowscreenshot20 from "./MoreinfopageforaprojectprevRowscreenshot20";
import React from "react";

export default function MoreInfoPageforaProjectPrevPage() {
    return (
        <>
            <div className="w-full bg-white-a700">
                <Header />
                <div>
                    <MoreinfopageforaprojectprevRow />
                    <MoreinfopageforaprojectprevRowoverview />
                    <MoreinfopageforaprojectprevRowscreenshot20 />
                    <MoreinfopageforaprojectprevRowgetinvolvedi />
                    <MoreinfopageforaprojectprevColumnheading />
                    <MoreinfopageforaprojectprevColumnheading1 />
                </div>
                <Footer className="mt-[138px]" />
            </div>
        </>
    );
}
