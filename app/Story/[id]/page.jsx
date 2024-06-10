"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MidData } from "@/api/MidData";
import CustomMeta from "@/components/CustomMeta";
import Navbar from "@/components/navbar/Navbar";

// Define the Page component
const Page = (id) => {
  // Initialize router
  const router = useRouter();

  // Set up state for data and error handling
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch data when component mounts or when id changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Only fetch data if id is defined
        if (id) {
          const fetchedData = await MidData();
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
    return (
      <div className="w-screen h-screen flex items-center justify-center ">
        {" "}
        <h2 className="animate-ping text-xl font-bold">
          Getting Curated News From The Inclusive India...
        </h2>
      </div>
    );
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
          <p className="text-gray-300 cursor-default">{data.Author}</p>
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
        </div>
        <p className="text-gray-200 text-xl cursor-default text-justify">
          {data.Content}
        </p>
        <Left />
        <Right />
      </div>
    </>
  );
};

// Export the Page component
export default Page;
