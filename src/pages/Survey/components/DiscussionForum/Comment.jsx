import React, { useEffect, useState } from "react";

const Comment = ({ comment }) => {
  const [likes, setLikes] = useState(comment.likes);
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);
  const [showReplies, setShowReplies] = useState(false); 
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("commentLikes")) || {};
    if (storedLikes[comment.id]) {
      setHasLiked(true);
    }
  }, [comment.id]);

  const handleLike = () => {
    const storedLikes = JSON.parse(localStorage.getItem("commentLikes")) || {};

    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
      delete storedLikes[comment.id];
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
      storedLikes[comment.id] = true;
    }

    localStorage.setItem("commentLikes", JSON.stringify(storedLikes));
  };

  const handleReply = () => {
    if (!reply.trim()) return;
    setReplies([...replies, { id: Date.now(), text: reply }]);
    setReply("");
    setShowReplies(true); 
  };

  return (
    <div className="p-3 bg-gray-100 rounded-md shadow-sm border">
      {/* Main Comment */}
      <div className="flex justify-between items-center">
        <p className="text-gray-700">{comment.text}</p>
        <button
          onClick={handleLike}
          className={`text-sm px-2 py-1 rounded-md ${
            hasLiked ? "bg-yellow-300 text-white" : "bg-yellow-200 hover:bg-yellow-300"
          }`}
        >
          👍 {likes}
        </button>
      </div>

      {/* Reply Input */}
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Reply..."
          className="w-full !p-2 border !rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={handleReply}
          className="bg-yellow-400 text-white-a700 px-3 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          Reply
        </button>
      </div>

      {/* Replies Toggle Button */}
      {replies.length > 0 && (
        <button
          onClick={() => setShowReplies(!showReplies)}
          className="text-sm text-yellow-400 hover:text-yellow-500 font-semibold mt-2"
        >
          {showReplies ? "Hide Replies" : `Show Replies (${replies.length})`}
        </button>
      )}

      {/* Replies Section */}
      {showReplies && replies.length > 0 && (
        <div className="mt-2 space-y-1 pl-4 border-l-2 border-yellow-300">
          {replies.map((rep) => (
            <p key={rep.id} className="text-sm text-gray-600">↪ {rep.text}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
