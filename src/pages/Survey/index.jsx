import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SurveyBanner from "./components/SurveyBanner";
import Vote from "./components/Vote";
import DiscussionForum from "./components/DiscussionForum/DiscussionForum";

function Survey() {
  return (
    <div>
      <Header />
      <SurveyBanner/>
      <Vote />
      <DiscussionForum />
      <Footer />
    </div>
  );
}

export default Survey;
