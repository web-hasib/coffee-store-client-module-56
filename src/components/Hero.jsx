import React from "react";

const Hero = () => {
  return (
    <div
      className="hero h-[800px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/8gGtxtvn/3.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content flex items-center text-center md:text-start ">
        <div className="md:w-3/5">

        </div>
        <div className="w-full ">
          <h1 className="mb-5 text-4xl  primary-font">Would you like a Cup of Delicious Coffee?</h1>
          <p className="text-sm mb-5 text-yellow-50 italic">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn bg-yellow-200 rounded-none">Learn more </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
