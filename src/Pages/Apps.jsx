import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "../components/TrendingApps/ProductsCard";
import NotFoundError from "../Pages/NotFoundError.jsx";
import "../components/LoadingSpinner/LoadingSpinner.css"; 


const Apps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const term = search.trim().toLowerCase();
  const filteredApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div className="py-22 px-6 md:px-12 bg-gray-50">
      <h2 className="text-4xl font-bold mb-3 text-center text-gray-800">
        Our All Applications
      </h2>
      <p className="mb-8 text-center text-md">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-semibold">
            All Apps{" "}
            <span className="text-sm text-gray-500">{filteredApps.length} Apps Found.</span>
          </h1>

          <div className="relative w-full md:w-64">
            <input
              type="search"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search apps..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="loader-container flex justify-center items-center h-40">
            <div className="loader border-4 border-t-4 border-gray-200 rounded-full w-12 h-12 animate-spin"></div>
          </div>
        ) : filteredApps.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <ProductsCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <NotFoundError />
        )}


        
      </div>

    </div>
  );
};

export default Apps;
