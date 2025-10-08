import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);

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

  if (!app) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={app.image}
        alt={app.title}
        className="w-full rounded-lg shadow-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
      <p className="text-gray-600 mb-4">{app.description}</p>
      <p className="text-sm text-gray-500">
        Downloads: <span className="font-semibold">{app.downloads}</span>
      </p>
      <p className="text-sm text-gray-500">
        Rating: <span className="font-semibold">{app.ratingAvg}</span>
      </p>
    </div>
  );
};

export default AppDetails;
