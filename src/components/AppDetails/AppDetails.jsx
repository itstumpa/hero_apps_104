import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Star from "../../assets/icon-ratings.png";
import Like from "../../assets/icon-review.png";
import Download from "../../assets/icon-downloads.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.jsx";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const fetchApp = async () => {
      try {
        const response = await axios.get("/Datafetch.json");
        const foundApp = response.data.find((a) => a.id.toString() === id);
        setApp(foundApp);
      } catch (error) {
        console.error("Error fetching app details:", error);
      }
    };
    fetchApp();
  }, [id]);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (app && installedApps.includes(app.id)) {
      setIsInstalled(true);
    }
  }, [app]);

  if (!app) {
    return <LoadingSpinner />;
  }

  const ratingAvg = app.ratingAvg || 0;

  const data = [
    { name: "5 star", value: ratingAvg >= 5 ? 12000 : 8000 },
    { name: "4 star", value: ratingAvg >= 4 ? 7000 : 5000 },
    { name: "3 star", value: ratingAvg >= 3 ? 4000 : 2000 },
    { name: "2 star", value: ratingAvg >= 2 ? 2500 : 1000 },
    { name: "1 star", value: ratingAvg >= 1 ? 1000 : 500 },
  ];

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setIsInstalled(true);
      toast.success("App Installed Successfully!");
    }
  };

  return (
    <>
      <section>
        <div className="max-w-[1600px] mx-auto p-4 sm:p-6 md:p-12 mt-16">
          <div className="flex flex-col md:flex-row gap-8 border-b-2 border-gray-400/20">
            <img
              src={app.image}
              alt={app.title}
              className="w-full md:w-[300px] rounded-lg shadow-md my-6"
            />

            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl mt-6 font-bold">{app.title}</h1>
              <p className="text-gray-600 mb-10">Developed by {app.companyName}</p>

              <div className="border-t-2 w-full border-gray-400/20 pt-4">
                <div className="flex flex-wrap gap-10 sm:gap-6 justify-start">
                  <div>
                    <img src={Download} alt="" className="w-8 my-1" />
                    <div className="text-3xl sm:text-4xl font-bold mb-1">29.6M</div>
                    <p>Total Downloads</p>
                  </div>
                  <div>
                    <img src={Star} alt="" className="w-8 my-1" />
                    <div className="text-3xl sm:text-4xl font-bold mb-1">906K</div>
                    <p>Total Reviews</p>
                  </div>
                  <div>
                    <img src={Like} alt="" className="w-8 my-1" />
                    <div className="text-3xl sm:text-4xl font-bold mb-1">132+</div>
                    <p>Active Apps</p>
                  </div>
                </div>

                <button
                  onClick={handleInstall}
                  disabled={isInstalled}
                  className={`${
                    isInstalled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  } text-white font-semibold py-1 px-4 mt-5 mb-6 rounded-sm`}
                >
                  {isInstalled ? "Installed" : `Install now (${app.size})`}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 p-4 rounded-lg shadow-sm">
            <h3 className="font-bold mb-4 text-lg sm:text-xl">Ratings</h3>
            <div className="w-full overflow-x-auto">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  layout="vertical"
                  data={data}
                  margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Bar dataKey="value" fill="orange" barSize={25} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-bold mb-6 text-lg sm:text-xl">Description</h3>
            <div className="space-y-6 text-sm sm:text-base text-[#777777] leading-relaxed">
              <p>{app.description}</p>
              <p className="hidden md:block">{app.description}</p>
              <p className="hidden md:block">{app.description}</p>
              
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
};

export default AppDetails;
