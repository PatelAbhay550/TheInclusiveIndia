import Footer from "@/components/Footer/Footer";
import Badge from "@/components/badgetop/Badge";
import Left from "@/components/left/Left";
import Mid from "@/components/mid/Mid";
import Navbar from "@/components/navbar/Navbar";
import Right from "@/components/right/Right";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Badge />
      <div className="main flex mt-4 md:flex-row flex-col  ">
        <Mid /> <Left />
        <Right />
      </div>
      <Footer />
    </>
  );
};

export default page;
