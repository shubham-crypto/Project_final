import React, { useState } from "react";
import Comment from "./Comment";

const CommentSection = ({ ideaId,comments, onAddComment }) => {
  const [newComment, setNewComment] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div >
      {/* Expand/Collapse Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-base text-yellow-400 hover:text-yellow-500 font-semibold"
      >
        {isExpanded ? "Hide Comments" : `Show Comments (${comments.length})`}
      </button>

      {/* Comment Box (No extra space when collapsed) */}
      <div className={`${isExpanded ? "mt-3" : "hidden"} bg-gray-50 p-4 rounded-md shadow-md border`}>
        {/* Display Comments */}
        <div className="space-y-3">
          {comments.length > 0 ? (
            comments.map((comment) => <Comment key={comment.id} comment={comment} />)
          ) : (
            <p className="text-gray-500 text-sm">No comments yet. Be the first to comment!</p>
          )}
        </div>

        {/* Add Comment Input */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full !p-2 border !rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={() => {
                if (newComment.trim()) {
                  onAddComment(ideaId, newComment);
                  setNewComment("");
                }
              }}
            className="bg-yellow-400 text-white-a700 px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition"
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
