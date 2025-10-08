// import { Github } from "lucide-react";
import React from "react";
import GooglePlay from "../assets/GooglePlay.svg"
import AppStore from "../assets/appStore.svg"

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
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
    className="btn font-bold btn-outline border-[#632EE3] text-black hover:bg-[#632EE3] hover:text-white text-[17px] flex items-center gap-2"
  >
    <img src={GooglePlay} alt="Google Play" className="w-6 h-6" />
    Play Store
  </a>

  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noreferrer"
    className="btn font-bold btn-outline border-[#632EE3] text-black hover:bg-[#632EE3] hover:text-white text-[17px] flex items-center gap-2"
  >
    <img src={AppStore} alt="Google Play" className="w-6 h-6" />
    App Store
  </a>
</div>

    </section>
  );
};

export default Home;
