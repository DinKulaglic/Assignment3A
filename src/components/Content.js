import React, { useState } from "react";

const Content = () => {
  const [isClicked, setClicked] = useState(false);
  return (
    <div className="mb-10 ">
      <div className="border-2 border-black h-20 mb-4 bg-white"></div>
      <div className="flex justify-center md:justify-end ">
        <button
          onClick={() => setClicked(!isClicked)}
          style={{
            border: "none",
            background: isClicked ? "blue" : "white",
            cursor: "pointer",
          }}
          className=""
        >
          <div className="border-2 border-black h-5 w-20"></div>
        </button>
      </div>
    </div>
  );
};

export default Content;
