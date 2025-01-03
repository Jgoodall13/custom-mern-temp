import React from "react";
import { Link } from "react-router-dom";

interface JsDayProps {
  title: string;
  image: string;
  link: string;
}

const JsDay: React.FC<JsDayProps> = ({ title, image, link }) => {
  return (
    <div className="relative w-[30%] h-[235px] shadow-lg hover:cursor-pointer">
      <Link to={link}>
        <img
          src={image}
          alt="default"
          className="absolute top-0 left-0 w-full h-full object-cover "
        />
        <h1 className="text-4xl mt-4 bg-white bg-opacity-70 p-2 z-1">
          {title}
        </h1>
      </Link>
    </div>
  );
};

export default JsDay;
