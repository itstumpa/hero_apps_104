import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "../../components/LoadingSpinner/LoadingSpinner.jsx";
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
    { name: "5 star", value: ratingAvg >= 5 ? 8000 : 12000 },
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
        <div className="max-w-[1600px] mx-auto p-6 mt-16">
          <div className="flex gap-8 border-b-2 border-gray-400/20">
            <img
              src={app.image}
              alt={app.title}
              className="w-[300px] rounded-lg shadow-md my-6"
            />

            <div className="w-full">
              <h1 className="text-2xl mt-6 font-bold">{app.title}</h1>
              <p className="text-gray-600 mb-10">Developed by {app.companyName}</p>

              <div className="border-t-2 w-full border-gray-400/20 ">
                <div className="flex flex-wrap  gap-10">
                  <div>
                    <img src={Download} alt="" className="w-8 my-1" />
                    <div className="text-3xl font-bold mb-1">29.6M</div>
                    <p>Total Downloads</p>
                  </div>
                  <div>
                    <img src={Star} alt="" className="w-8 my-1" />
                    <div className="text-3xl font-bold mb-1">906K</div>
                    <p>Total Reviews</p>
                  </div>
                  <div>
                    <img src={Like} alt="" className="w-8 my-1" />
                    <div className="text-3xl font-bold mb-1">132+</div>
                    <p>Active Apps</p>
                  </div>
                </div>

                <button
                  onClick={handleInstall}
                  disabled={isInstalled}
                  className={`${
                    isInstalled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600  hover:bg-green-700"
                  }
    text-white font-semibold py-1 px-4 mt-5 mb-6 rounded-sm`}
                >
                  {isInstalled ? "Installed" : `Install now (${app.size})`}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold mb-4">Ratings</h3>
            <BarChart
              layout="vertical"
              width={1400}
              height={300}
              data={data}
              margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="value" fill="orange" barSize={25} />
            </BarChart>
          </div>

          <div className="mt-10">
            <h3 className="font-bold mb-6">Description</h3>
            <div className="space-y-6 text-sm text-[#777777] leading-relaxed">
              <p>
                This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
              </p>
              <p>
                A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
              </p>
              <p>
                For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
};

export default AppDetails;
