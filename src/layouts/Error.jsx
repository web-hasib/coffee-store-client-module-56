import React from "react";
import { useNavigate } from "react-router";
const Error = () => {
    const nevigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-611.5px)] flex flex-col items-center pb-10">
      <img
        className=" mx-auto"
        src="https://i.ibb.co/sdGQfGr7/404.gif"
        alt=""
      />
      <button className="btn p-5 py-6 text-white primary-font text-3xl bg-amber-900 rounded-full font-thin hover:bg-green-400 hover:text-gray-600" onClick={()=>nevigate(-1)}>go Back</button>
    </div>
  );
};

export default Error;
