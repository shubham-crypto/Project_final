import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const DiscussionAnalytics = ({ ideas, likes, dislikes }) => {
  // Extract all comments from ideas
  const comments = useMemo(() => ideas.flatMap(idea => idea.comments), [ideas]);

  // Group data by month
  const participationTrend = useMemo(() => {
    const trend = {};
  
    ideas.forEach(({ submittedAt }) => {
      if (!submittedAt) return;
      const date = new Date(submittedAt);
      if (isNaN(date.getTime())) return;
  
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // JS months are 0-indexed (0 = Jan, 11 = Dec)
      const key = `${year}-${month.toString().padStart(2, "0")}`; // Format as YYYY-MM
  
      if (!trend[key]) {
        trend[key] = { ideas: 0, comments: 0 };
      }
      trend[key].ideas += 1;
    });
  
    comments.forEach(({ createdAt }) => {
      if (!createdAt) return;
      const date = new Date(createdAt);
      if (isNaN(date.getTime())) return;
  
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const key = `${year}-${month.toString().padStart(2, "0")}`; // YYYY-MM
  
      if (!trend[key]) {
        trend[key] = { ideas: 0, comments: 0 };
      }
      trend[key].comments += 1;
    });
  
    return Object.keys(trend)
      .sort() // Sorting ensures 2024-01, 2024-02, ... 2025-01, 2025-02
      .map(key => ({
        month: key, // Keep YYYY-MM format for sorting
        ideas: trend[key].ideas,
        comments: trend[key].comments,
      }));
  }, [ideas, comments]);
  

  const chartData = {
    labels: participationTrend.map((data) => data.month),
    datasets: [
      {
        label: "Comments Received",
        data: participationTrend.map((data) => data.comments),
        borderColor: "#FFC107", // Yellow
        fill: false,
        tension: 0.4,
      },
      {
        label: "Ideas Submitted",
        data: participationTrend.map((data) => data.ideas),
        borderColor: "#FF5733", // Red
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="mt-6 p-6 bg-white shadow-md rounded-md border">
      <h2 className="text-xl font-bold mb-4">Discussion Analytics</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{ideas.length}</h3>
          <p className="text-sm text-gray-600">Total Ideas</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{comments.length}</h3>
          <p className="text-sm text-gray-600">Total Comments</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{likes}</h3>
          <p className="text-sm text-gray-600">Total Likes</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{dislikes}</h3>
          <p className="text-sm text-gray-600">Total Dislikes</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-md font-semibold mb-2">Participation Trend</h3>
        <div style={{ height: "300px", width: "100%" }}>
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: { beginAtZero: true },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscussionAnalytics;
