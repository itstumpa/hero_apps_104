import React, { useEffect, useState } from "react";
import axios from "axios";
import GooglePlay from "../assets/GooglePlay.svg";
import AppStore from "../assets/appStore.svg";
import Hero from "../assets/hero.png";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router";
import ProductsCard from "../components/TrendingApps/ProductsCard";

const Home = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const visibleCount = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get("/Datafetch.json");
        setApps(response.data);
      } catch (error) {
        console.error("Error fetching app data:", error);
      } finally {
        
        setTimeout(() => setLoading(false), 200);
      }
    };
    fetchApps();
  }, []);

  const handleSeeMore = () => {
    navigate("/apps");
  };

 
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-20">
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

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 ">
          <a
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
            rel="noreferrer"
            className="btn hover:scale-105 transition hover:ease-in-out font-bold btn-outline border-gray-300 text-black hover:bg-[#632EE3] hover:text-white text-[17px] flex items-center gap-2"
          >
            <img src={GooglePlay} alt="Google Play" className="w-6 h-6" />
            Play Store
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
            className="btn hover:scale-105 transition hover:ease-in-out font-bold btn-outline border-gray-300 text-black hover:bg-[#632EE3] hover:text-white text-[17px] flex items-center gap-2"
          >
            <img src={AppStore} alt="App Store" className="w-6 h-6" />
            App Store
          </a>
        </div>

        {/* Hero Image */}
        <div className="pt-10 px-4">
          <img src={Hero} alt="Hero" />
        </div>
      </section>

      {/* Stats Section */}
      <div className="w-full h-[350px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-10">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-wrap justify-center gap-10 text-center items-center">
          <div className="space-y-5">
            <p className="text-[#c3c3c3] text-sm">Total Downloads</p>
            <div className="text-6xl font-bold ">29.6M</div>
            <p className="text-[#c3c3c3] text-sm">21% more than last month</p>
          </div>
          <div className="space-y-5">
            <p className="text-[#c3c3c3] text-sm">Total Reviews</p>
            <div className="text-6xl font-bold">906K</div>
            <p className="text-[#c3c3c3] text-sm">21% more than last month</p>
          </div>
          <div className="space-y-5">
            <p className="text-[#c3c3c3] text-sm">Active Apps</p>
            <div className="text-6xl font-bold">132+</div>
            <p className="text-[#c3c3c3] text-sm">31 more will Launch</p>
          </div>
        </div>
      </div>

      {/* Trending Apps */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-4xl font-bold mb-3 text-center text-gray-800">
          Trending Apps
        </h2>
        <p className="mb-8 text-center text-md">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="max-w-[1600px] flex mx-auto justify-center">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
            {apps.slice(0, visibleCount).map((app) => (
              <ProductsCard key={app.id} app={app} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center max-w-[1600px] mx-auto">
          <button
            onClick={handleSeeMore}
            className="mt-8 px-8 py-3 rounded-sm text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
          >
            Show All
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
