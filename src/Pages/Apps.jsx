import React, { useEffect, useState } from "react";
import { Star, Download } from "lucide-react";
import axios from "axios";
// import "./App.css";

const Apps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get("/Datafetch.json");
        setApps(response.data);
      } catch (error) {
        console.error("Error fetching app data:", error);
      }
    };
    fetchApps();
  }, []);

  return (
    <>
      {/* Trending Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-4xl font-bold mb-3 text-center text-gray-800">
          Our All Applications
        </h2>
        <p className="mb-8 text-center text-md">
Explore All Apps on the Market developed by us. We code for Millions        </p>

        <div className="max-w-[1600px] flex mx-auto justify-center">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {apps.map((app) => (
              <div
                key={app.id}
                className="card bg-white shadow-md hover:shadow-lg hover:scale-105 transition ease-in-out rounded-xl overflow-hidden"
              >
                <figure className="p-3 rounded-md">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="rounded-md h-86 w-full object-cover"
                  />
                </figure>
                <div className="px-4 pb-4">
                  <h3 className="font-semibold text-lg mb-2">{app.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-1 bg-gray-100 p-2 rounded-md text-green-500 font-semibold">
                      <Download className="w-4 h-4" />
                      {app.downloads}
                    </span>
                    <span className="flex items-center gap-1 bg-amber-100 p-2 rounded-md text-amber-400 font-semibold">
                      <Star className="w-4 h-4" />
                      {app.ratingAvg}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Apps;
