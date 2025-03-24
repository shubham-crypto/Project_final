import React from "react";
import CommentSection from "./CommentSection";

const IdeaList = ({ ideas, onVote, userVotes, onAddComment }) => {
  return (
    <div className="flex flex-col space-y-4">
      {ideas.map((idea) => (
        <div key={idea.id} className="bg-white p-4 rounded-lg shadow-md border flex flex-col space-y-2">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <div className="flex flex-col w-24 items-center space-y-2 ">
                <img src={idea.userProfile} alt="User" className="w-20 h-20 rounded-full" />
                <span className="font-semibold">{idea.username}</span>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{idea.title}</h3>
                  <p className="text-gray-600">{idea.description}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className={`flex items-center gap-1 px-3 py-1 rounded-md ${
                  userVotes[idea.id] === "likes" ? "bg-green-500 text-white" : "bg-green-200 hover:bg-green-300"
                }`}
                onClick={() => onVote(idea.id, "likes")}
              >
                👍 {idea.likes}
              </button>
              <button
                className={`flex items-center gap-1 px-3 py-1 rounded-md ${
                  userVotes[idea.id] === "dislikes" ? "bg-red-500 text-white" : "bg-red-200 hover:bg-red-300"
                }`}
                onClick={() => onVote(idea.id, "dislikes")}
              >
                👎 {idea.dislikes}
              </button>
            </div>
          </div>
          <CommentSection ideaId={idea.id} comments={idea.comments} onAddComment={onAddComment} />
        </div>
      ))}
    </div>
  );
};

export default IdeaList;
