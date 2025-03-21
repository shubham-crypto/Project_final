import React, { useState } from "react";
import IdeaForm from "./IdeaForm";
import IdeaList from "./IdeaList";
import DiscussionAnalytics from "./DiscussionAnalytics";

const DiscussionForum = () => {
  const [user, setUser] = useState(null); // Mock user state (update as needed)
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: "Improve Public Transport",
      description: "Introducing more buses and metro lines to reduce traffic congestion.",
      likes: 12,
      dislikes: 2,
      comments: [
        { id: 1, text: "Great idea! We need more sustainable transport options." },
        { id: 2, text: "Would love to see better connectivity between suburban areas." }
      ],
      username: "John Doe",
      userProfile: "https://via.placeholder.com/40"
    },
    {
      id: 2,
      title: "Create More Green Spaces",
      description: "Building more parks and community gardens for a greener city.",
      likes: 20,
      dislikes: 3,
      comments: [
        { id: 1, text: "Absolutely! Green spaces improve mental well-being." },
        { id: 2, text: "We also need to maintain existing parks better." }
      ],
      username: "Alice Green",
      userProfile: "https://via.placeholder.com/40"
    },
    {
      id: 3,
      title: "Smart Traffic Management",
      description: "Using AI and sensors to manage traffic flow efficiently.",
      likes: 8,
      dislikes: 1,
      comments: [
        { id: 1, text: "AI-driven traffic lights could reduce waiting times!" },
        { id: 2, text: "We should also improve road quality to reduce congestion." }
      ],
      username: "Mark Tech",
      userProfile: "https://via.placeholder.com/40"
    }
  ]);

  // Add a new idea with user details
  const handleAddIdea = (newIdea) => {
    setIdeas([
      ...ideas,
      {
        ...newIdea,
        id: Date.now(),
        likes: 0,
        dislikes: 0,
        comments: [],
        username: user?.name || "Anonymous",
        userProfile: user?.profileImage || "https://via.placeholder.com/40"
      }
    ]);
  };

  const handleVote = (id, type) => {
    setIdeas(ideas.map(idea =>
      idea.id === id
        ? { ...idea, [type]: idea[type] + 1 }
        : idea
    ));
  };

  return (
    <div id="discussion-forum" className="p-6">
      {/* Header */}
      <div className="flex justify-center">
        <h2 className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-white text-xl font-semibold px-6 py-3 rounded-md shadow-md">
          Discussion Forum
        </h2>
      </div>

      {/* Idea Form */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md border">
        <IdeaForm onAddIdea={handleAddIdea} />
      </div>
      <div className="mt-6">
        <IdeaList ideas={ideas} onVote={handleVote} />
      </div>
      <DiscussionAnalytics /> 
    </div>
  );
};

export default DiscussionForum;
