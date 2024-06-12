"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RightData } from "@/api/RightData";
import CustomMeta from "@/components/CustomMeta";
import Navbar from "@/components/navbar/Navbar";
import Left from "@/components/left/Left";
import Right from "@/components/right/Right";

// Define the Page component
const Page = (id) => {
  // Initialize router
  const router = useRouter();

  // Set up state for data and error handling
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  console.log(id.params.id);
  // Fetch data when component mounts or when id changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Only fetch data if id is defined
        if (id) {
          const fetchedData = await RightData();
          // Find the item in data array with matching id
          const item = fetchedData.find((item) => item.id === id.params.id);
          // Set the found item as data
          setData(item);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    // Fetch data
    fetchData();
  }, [id]);

  // Render loading state if data is not available yet
  if (!data) {
    return <div>Loading...</div>;
  }
  const title = data.Headline;
  const description = data.Content.substring(0, 150) + "..."; // Truncate content for description
  const image = data.Image;
  // Render error state if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render data
  return (
    <>
      {" "}
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-6">
        <CustomMeta title={title} description={description} />
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold cursor-default">{data.Headline}</h1>
          
        </div>
        <img
          src={data.Image}
          alt={data.Headline}
          className="w-full mb-4 rounded-lg select-none"
        />
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.split(", ").map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 cursor-pointer text-gray-800 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
          <p className="text-gray-300 underline cursor-pointer">
            Author: {data.Author}
          </p>
        </div>
        <p className="text-gray-200 text-xl cursor-default text-justify">{data.Content}</p>
      </div>
      <div className="more ml-[-15px]">
          <Left />
          <Right />
        </div>
    </>
  );
};

// Export the Page component
export default Page;
