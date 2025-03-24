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
      submittedAt: "2024-10-05T08:00:00Z",
      comments: [
        { id: 1, text: "Great idea! We need more sustainable transport options.", likes: 3, replies: [], createdAt: "2024-10-12T09:30:00Z" }
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
      submittedAt: "2024-10-02T10:30:00Z",
      comments: [
        { id: 1, text: "Absolutely! Green spaces improve mental well-being.", likes: 4, replies: [], createdAt: "2024-11-10T10:20:00Z" },
        { id: 2, text: "We also need to maintain existing parks better.", likes: 2, replies: [], createdAt: "2024-11-14T12:00:00Z" },
        { id: 3, text: "More trees in urban areas will reduce pollution.", likes: 3, replies: [], createdAt: "2024-11-20T15:00:00Z" },
        { id: 4, text: "Community gardens could be great for food security.", likes: 5, replies: [], createdAt: "2024-11-25T17:00:00Z" },
        { id: 5, text: "Let's involve schools in tree-planting drives.", likes: 1, replies: [], createdAt: "2024-11-28T19:00:00Z" }
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
      submittedAt: "2024-12-15T14:00:00Z",
      comments: [
        { id: 1, text: "AI-driven traffic lights could reduce waiting times!", likes: 5, replies: [], createdAt: "2024-12-05T16:00:00Z" },
        { id: 2, text: "We should also improve road quality to reduce congestion.", likes: 2, replies: [], createdAt: "2024-12-18T19:30:00Z" },
        { id: 3, text: "Smart sensors for pedestrian crossings would be useful.", likes: 3, replies: [], createdAt: "2024-12-22T09:45:00Z" },
        { id: 4, text: "Real-time traffic monitoring can optimize road usage.", likes: 2, replies: [], createdAt: "2024-12-27T14:20:00Z" }
      ],
      username: "Mark Tech",
      userProfile: "/images/mark.jpg"
    },
    {
      id: 4,
      title: "Better Waste Management",
      description: "Implementing smart bins and better recycling programs.",
      likes: 15,
      dislikes: 2,
      submittedAt: "2025-01-10T12:30:00Z",
      comments: [
        { id: 1, text: "We need stricter waste segregation rules.", likes: 3, replies: [], createdAt: "2025-01-10T08:45:00Z" },
        { id: 2, text: "Smart bins with notifications would be a game changer!", likes: 4, replies: [], createdAt: "2025-01-15T11:30:00Z" }
      ],
      username: "Sophia Green",
      userProfile: "/images/sophia.jpg"
    },
    {
      id: 5,
      title: "Encourage Cycling Infrastructure",
      description: "Developing dedicated cycling lanes and bike-sharing programs.",
      likes: 18,
      dislikes: 4,
      submittedAt: "2025-02-05T09:15:00Z",
      comments: [
        { id: 1, text: "More cycling lanes would be great!", likes: 5, replies: [], createdAt: "2025-02-10T07:50:00Z" },
        { id: 2, text: "Safety measures need to be improved as well.", likes: 2, replies: [], createdAt: "2025-02-12T14:40:00Z" },
        { id: 3, text: "Bike-sharing stations should be near metro stops.", likes: 3, replies: [], createdAt: "2025-02-18T13:25:00Z" },
        { id: 4, text: "More awareness campaigns needed.", likes: 1, replies: [], createdAt: "2025-02-25T16:10:00Z" }
      ],
      username: "Mike Rider",
      userProfile: "/images/mike.jpg"
    },
    {
      id: 6,
      title: "Winter Shelters for the Homeless",
      description: "Setting up temporary heated shelters for homeless individuals during winter.",
      likes: 15,
      dislikes: 2,
      comments: [
        {
          id: 1,
          text: "This is a much-needed initiative! Many people suffer in extreme cold.",
          likes: 6,
          replies: [],
          createdAt: "2024-11-10T09:30:00Z"
        },
        {
          id: 2,
          text: "The government should partner with NGOs to make this happen.",
          likes: 4,
          replies: [],
          createdAt: "2025-01-15T14:00:00Z"
        },
        {
          id: 3,
          text: "We also need better long-term solutions like affordable housing.",
          likes: 3,
          replies: [],
          createdAt: "2025-01-20T18:45:00Z"
        },
        {
          id: 4,
          text: "Maybe unused public buildings can be repurposed as shelters?",
          likes: 5,
          replies: [],
          createdAt: "2025-01-25T16:10:00Z"
        }
      ],
      username: "Emma Hope",
      userProfile: "/images/emma.jpg",
      submittedAt: "2025-01-05T08:00:00Z"
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

  const handleAddComment = (ideaId, newComment) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) =>
        idea.id === ideaId
          ? {
              ...idea,
              comments: [
                ...idea.comments,
                {
                  id: Date.now(),
                  text: newComment,
                  likes: 0,
                  replies: [],
                  timestamp: new Date().toISOString(), // Store timestamp
                },
              ],
            }
          : idea
      )
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
        <IdeaList 
        ideas={ideas}
         onVote={handleVote}
          userVotes={userVotes} 
            onAddComment={handleAddComment}
          />
      </div>
      <DiscussionAnalytics 
        ideas={ideas} 
        likes={ideas.reduce((sum, idea) => sum + idea.likes, 0)}
        dislikes={ideas.reduce((sum, idea) => sum + idea.dislikes, 0)}
      />
    </div>
  );
};

export default DiscussionForum;
