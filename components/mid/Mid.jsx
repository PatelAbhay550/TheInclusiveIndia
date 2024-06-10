"use client";
import React, { useState, useEffect } from "react";
import { MidData } from "@/api/MidData";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Mid = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await MidData();
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
    router.push(`/Story/${id}`, undefined, { shallow: true });
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="p-4 md:w-1/2 w-screen min-w-60 md:border-t-0 border-t-[1px]  border-r-0 md:border-r-[1px]">
      <h1 className="text-2xl font-bold mb-4">Headlines Today</h1>
      <ul className="space-y-4 border-b-[1px]">
        {data.map((item, index) => (
          <li
            key={index}
            className="p-4  text-white cursor-pointer"
            onClick={() => handleClick(item.id)} // Pass item id to handleClick function
          >
            <h2 className="font-semibold text-4xl">{item.Headline}</h2>
            <Image
              src={item.Image}
              alt={item.Headline}
              width={300}
              height={350}
              className="w-full mt-4 mb-4 rounded-lg select-none"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mid;
