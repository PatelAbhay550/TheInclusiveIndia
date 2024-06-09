"use client";
import React, { useState, useEffect } from "react";
import { LeftData } from "@/api/LeftData";
import { useRouter } from "next/navigation";

const Left = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await LeftData();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    getData();
  }, []);

  const handleClick = (id) => {
    // Navigate to the detail page with the item id
    router.push(`/Latest/${id}`, undefined, { shallow: true });
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="p-4 w-1/4 min-w-60">
      <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-900 h-68 to-indigo-800">News Flash</h1>
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-md text-zinc-700 bg-white cursor-pointer"
            onClick={() => handleClick(item.id)} // Pass item id to handleClick function
          >
            <p className="font-semibold text-xl">{item.Headline}</p>
            <p className="font-semibold text-sm underline">{item.Author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Left;
