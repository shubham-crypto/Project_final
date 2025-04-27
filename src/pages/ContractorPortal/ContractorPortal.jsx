import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ContractorHeader } from "./ContractorHeader";
import RadarChart from "./RadarChart";
import { ClipLoader } from "react-spinners"; // Import the spinner
import axios from "axios";

const contractorData = {
    experience_years: 5, // Example data
    delivery_time_months: 6,
    success_rate_percent: 80,
    budget_adherence_percent: 90,
  };

export const ContractorPortal = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading
  
  // API call function
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/ml/contractor-score", contractorData)// Replace with your actual API URL
      const result=response.data; // Log the response data
      console.log("API Response: ", result); // Log the response data
      setData(result);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    finally {
        setTimeout(() => {
            setLoading(false); // Set loading to false after the delay
          }, 3000); // Set loading to false after data is fetched
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full bg-white-a700 mt-24">
        <Header />
        <div className="flex flex-col items-center gap-[136px] md:gap-[102px] sm:gap-[68px]">
          <ContractorHeader />
          <div className="container-xs p-5 md:p-0">
            {loading ? (
              <div className="flex justify-center items-center">
                <ClipLoader
                  color="yellow"
                  loading={loading}
                  size={200}
                  cssOverride={{
                    margin: "auto", // Ensure it's centered
                    display: "block",
                    borderWidth: "16px", // Increase the thickness here
                  }}
                />{" "}
                {/* Show spinner */}
              </div>
            ) : (
              <RadarChart data={data} /> // Pass fetched data to RadarChart component
            )}
          </div>
        </div>
        <Footer className="mt-[136px]" />
      </div>
    </>
  );
};
