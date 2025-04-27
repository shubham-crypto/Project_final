import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2'; // Import Radar chart from chart.js
import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement } from 'chart.js';

// Register necessary chart.js components
ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement);

const RadarChart = ({ score }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (score !== null) {
      // Labels to represent different categories
      const labels = ['Experience', 'Delivery Time', 'Success Rate', 'Budget Adherence'];

      // For simplicity, we can assume the score you get is mapped into these categories
      const values = [score, 70, 80, 75]; // Example values, where `score` can replace one of them

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Contractor Performance',
            data: values, // Map the values for the chart
            backgroundColor: 'rgba(255, 159, 64, 0.2)', // Customize background color
            borderColor: 'rgba(255, 159, 64, 1)', // Customize border color
            borderWidth: 1,
          },
        ],
      });
    }
  }, [score]);

  return chartData ? (
    <div>
      <Radar data={chartData} options={{
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      }} />
    </div>
  ) : (
    <p>Loading chart data...</p>
  );
};

export default RadarChart;
