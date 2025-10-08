// import { Github } from "lucide-react";
import React from "react";
import GooglePlay from "../assets/GooglePlay.svg"
import AppStore from "../assets/appStore.svg"
import Hero from "../assets/hero.png"

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-xl mx-auto">
        We Build{" "}
        <span className="font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>

      <p className="py-6 max-w-3xl text-gray-600 text-base md:text-lg mx-auto">
        At <span className="font-semibold text-[#632EE3]">HERO.IO</span>, we
        craft innovative apps designed to make everyday life simpler, smarter,
        and more exciting. Our goal is to turn your ideas into digital
        experiences that truly make an impact.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
  <a
    href="https://play.google.com/store/games?hl=en"
    target="_blank"
    rel="noreferrer"
    className="btn font-bold btn-outline border-gray-300 text-black hover:bg-[#632EE3] hover:text-white text-[17px] flex items-center gap-2"
  >
    <img src={GooglePlay} alt="Google Play" className="w-6 h-6" />
    Play Store
  </a>

  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noreferrer"
    className="btn font-bold btn-outline border-gray-300 text-black hover:bg-[#632EE3] hover:text-white text-[17px] flex items-center gap-2"
  >
    <img src={AppStore} alt="Google Play" className="w-6 h-6" />
    App Store
  </a>
</div>
{/* hero image  */}
<div className="pt-10 px-4">
  <img src={Hero} alt="" />
</div>

{/* - Trusted by Millions, Built for You  */}
<div className="w-full h-[300px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ">
    
    <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-14 mb-5">
      <h1>Trusted by Millions, Built for You</h1>
      </div>
  <div className="stats text-white">
      <div className="text-center items-center flex justify-center ">

     
  <div className="stat">
    <div className="stat-figure ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title text-white">Total Downloads</div>
    <div className="stat-value text-[3rem]">29.6M</div>
    <div className="stat-desc text-white">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    </div>
   <div className="stat-title text-white">Total Reviews</div>
    <div className="stat-value text-[3rem]">906K</div>
    <div className="stat-desc text-white">46% more than last month</div>
  </div>


  <div className="stat">
    <div className="stat-figure ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title text-white">Active Apps</div>
    <div className="stat-value text-[3rem]">132+</div>
    <div className="stat-desc text-white">31 more will Launch</div>
  </div>
</div>
</div>
 </div>
    </section>
  );
};

export default Home;
