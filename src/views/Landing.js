import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";

const Landing = () => {
  return (
    <div className="p-10 flex justify-center">
      <div className="hidden md:block md:w-1/4">
        <LeftBar />
      </div>
      <div className="w-full md:w-3/4">
        <Header />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
};

export default Landing;
