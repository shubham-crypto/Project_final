import React, { useState } from "react";

const Vote = () => {
  const [polls, setPolls] = useState([
    { id: 1, question: "Should we build a new park?", yes: 10, no: 5, notSure: 3 },
    { id: 2, question: "Should we increase bike lanes?", yes: 7, no: 8, notSure: 4 },
    { id: 3, question: "Should we add more public transport?", yes: 12, no: 3, notSure: 6 }
  ]);

  const handleVote = (id, choice) => {
    setPolls(polls.map(poll =>
      poll.id === id ? { ...poll, [choice]: poll[choice] + 1 } : poll
    ));
  };

  return (
    <div className="p-6">
     <div className="flex w-full justify-center">
        <h2 className="bg-gradient-to-r w-fit from-yellow-400 to-yellow-200 md:px-[34px] rounded-md py-4 !text-gray-900_03 px-5 text-xl font-semibold text-center">
          Live Polls
        </h2>
     </div>

      {/* Grid Layout for Polls */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {polls.map((poll) => {
          const totalVotes = poll.yes + poll.no + poll.notSure;
          const maxHeight = 250; // Max bar height in pixels

          const yesHeight = totalVotes ? (poll.yes / totalVotes) * maxHeight : maxHeight / 3;
          const noHeight = totalVotes ? (poll.no / totalVotes) * maxHeight : maxHeight / 3;
          const notSureHeight = totalVotes ? (poll.notSure / totalVotes) * maxHeight : maxHeight / 3;
          return (
            <div key={poll.id} className="p-4 border rounded-lg shadow-sm bg-gradient-to-r from-gray-100 to-gray-200
">
              <h3 className="text-lg font-semibold text-center">{poll.question}</h3>

              {/* Vertical Bars Container */}
              <div className="mt-4 flex justify-center items-end gap-12 h-64">
                <div className="flex flex-col items-center">
                  <div 
                    className="w-12 bg-yellow-400 rounded-t-md transition-all duration-300 min-h-[10px]"
                    style={{ height: `${yesHeight}px` }} 
                  ></div>
                  <span className="mt-2 text-sm font-medium">({poll.yes})</span>
                </div>
                <div className="flex flex-col items-center">
                  <div 
                    className="w-12 bg-red-500 rounded-t-md transition-all duration-300 min-h-[10px]"
                    style={{ height: `${noHeight}px` }}
                  ></div>
                  <span className="mt-2 text-sm font-medium">({poll.no})</span>
                </div>
                <div className="flex flex-col items-center">
                  <div 
                    className="w-12 bg-gray-400 rounded-t-md transition-all duration-300 min-h-[10px]"
                    style={{ height: `${notSureHeight}px` }}
                  ></div>
                  <span className="mt-2 text-sm font-medium">({poll.notSure})</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex justify-center gap-6 text-sm font-medium text-white-a700">
                <button
                  onClick={() => handleVote(poll.id, "yes")}
                  className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition"
                >
                  Vote Yes
                </button>
                <button
                  onClick={() => handleVote(poll.id, "no")}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Vote No
                </button>
                <button
                  onClick={() => handleVote(poll.id, "notSure")}
                  className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500 transition"
                >
                  Not Sure
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vote;
