import React, { useEffect, useState } from "react";
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
      userProfile: "/images/john.jpg"
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
      userProfile: "/images/alicia.jpg"
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
      userProfile: "/images/mark.jpg"
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

  const [userVotes, setUserVotes] = useState({});

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("userVotes")) || {};
    setUserVotes(storedVotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("userVotes", JSON.stringify(userVotes));
  }, [userVotes]);

  const handleVote = (id, type) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) => {
        if (idea.id === id) {
          const currentVote = userVotes[id];

          let newLikes = idea.likes;
          let newDislikes = idea.dislikes;

          if (currentVote === type) {
            newLikes = type === "likes" ? idea.likes - 1 : idea.likes;
            newDislikes = type === "dislikes" ? idea.dislikes - 1 : idea.dislikes;
            setUserVotes((prev) => ({ ...prev, [id]: null }));
          } else {
            if (currentVote === "likes") newLikes -= 1;
            if (currentVote === "dislikes") newDislikes -= 1;

            newLikes = type === "likes" ? newLikes + 1 : newLikes;
            newDislikes = type === "dislikes" ? newDislikes + 1 : newDislikes;

            setUserVotes((prev) => ({ ...prev, [id]: type }));
          }

          return { ...idea, likes: newLikes, dislikes: newDislikes };
        }
        return idea;
      })
    );
  };


  return (
    <div id="discussion-forum" className="p-6">
      <div className="flex justify-center">
        <h2 className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-white text-xl font-semibold px-6 py-3 rounded-md shadow-md">
          Discussion Forum
        </h2>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md border">
        <IdeaForm onAddIdea={handleAddIdea} />
      </div>
      <div className="mt-6">
        <IdeaList ideas={ideas} onVote={handleVote} userVotes={userVotes}/>
      </div>
      <DiscussionAnalytics /> 
    </div>
  );
};

export default DiscussionForum;
