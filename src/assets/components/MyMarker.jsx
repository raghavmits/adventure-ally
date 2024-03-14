import React from "react";

const MyMarker = ({ text, tooltip, $hover }) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
  };

  console.log("MyMarker is working");

  return (
    
    <div
      className={`${
        $hover ? "bg-blue-600" : "bg-red-600"
      } rounded-full text-white h-10 w-10 relative border border-transparent ${
        $hover ? "hover:bg-blue-600" : ""
      }`}
      onClick={handleClick}
      data-abc
    >
      <span
        className="absolute top-1/2 left-1/2 w-1/2 h-1/2 text-center transform -translate-x-1/2 -translate-y-1/2"
        title={tooltip}
      >
        {text}
      </span>
    </div>
  );
};

export default MyMarker;
