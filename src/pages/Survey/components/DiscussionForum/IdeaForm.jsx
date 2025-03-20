import React, { useState } from "react";

const IdeaForm = ({ onAddIdea }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddIdea({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-6 rounded-lg shadow-md border flex flex-col space-y-4"
    >
      {/* Title Input */}
      <input
        type="text"
        placeholder="Idea Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full !p-3 border h-4 border-gray-300 !rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Description Textarea */}
      <textarea
        placeholder="Describe your idea..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="group relative bg-gradient-to-r from-yellow-400 to-yellow-200 text-gray-900 px-4 py-2 rounded-md font-medium transition w-fit overflow-hidden"
        >
        <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-0 group-hover:opacity-100 transition duration-300"></span>
        <span className="relative z-10">Submit Idea</span>
      </button>

    </form>
  );
};

export default IdeaForm;
