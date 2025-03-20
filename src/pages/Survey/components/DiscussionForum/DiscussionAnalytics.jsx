import React, { useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const initialAnalytics = {
  totalIdeas: 50,
  totalComments: 120,
  totalLikes: 340,
  totalDislikes: 40,
  participationTrend: [
    { month: "Jan", ideas: 5, comments: 10 },
    { month: "Feb", ideas: 8, comments: 15 },
    { month: "Mar", ideas: 12, comments: 30 },
    { month: "Apr", ideas: 15, comments: 40 },
    { month: "May", ideas: 10, comments: 25 },
  ],
};

const DiscussionAnalytics = () => {
  const [analytics] = useState(initialAnalytics); // ✅ No need for useEffect

  const {
    totalIdeas,
    totalComments,
    totalLikes,
    totalDislikes,
    participationTrend,
  } = analytics;

  // ✅ Memoize chartData to prevent unnecessary re-renders
  const chartData = useMemo(
    () => ({
      labels: participationTrend.map((data) => data.month),
      datasets: [
        {
          label: "Ideas Submitted",
          data: participationTrend.map((data) => data.ideas),
          borderColor: "#4CAF50",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Comments Received",
          data: participationTrend.map((data) => data.comments),
          borderColor: "#FFC107",
          fill: false,
          tension: 0.4,
        },
      ],
    }),
    [participationTrend]
  );

  return (
    <div className="mt-6 p-6 bg-white shadow-md rounded-md border">
      <h2 className="text-xl font-bold mb-4">Discussion Analytics</h2>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{totalIdeas}</h3>
          <p className="text-sm text-gray-600">Total Ideas</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{totalComments}</h3>
          <p className="text-sm text-gray-600">Total Comments</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{totalLikes}</h3>
          <p className="text-sm text-gray-600">Total Likes</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{totalDislikes}</h3>
          <p className="text-sm text-gray-600">Total Dislikes</p>
        </div>
      </div>

      {/* Participation Trend Graph */}
      <div className="mt-6">
        <h3 className="text-md font-semibold mb-2">Participation Trend</h3>
        <div style={{ height: "300px", width: "100%" }}> {/* ✅ Restrict height */}
            <Line 
            data={chartData} 
            options={{ 
                responsive: true, 
                maintainAspectRatio: false,  // Allow controlled resizing
                scales: { 
                y: { beginAtZero: true } // Ensure proper scaling
                } 
            }} 
            />
        </div>
       </div>

    </div>
  );
};

export default DiscussionAnalytics;
