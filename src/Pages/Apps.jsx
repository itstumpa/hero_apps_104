
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "../components/TrendingApps/ProductsCard";
import NotFoundError from "../Pages/NotFoundError.jsx";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.jsx";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get("/Datafetch.json");
        setApps(response.data);
      } catch (error) {
        console.error("Error fetching app data:", error);
      } finally {

        setTimeout(() => {
          setLoading(false);
        }, 200);
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
    }, 100); 
  };

  const term = search.trim().toLowerCase();
  const filteredApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div className="py-10 md:py-22 px-4 md:px-8 lg:px-12 relative mx-auto max-w-[1600px]">
      
      {loading && <LoadingSpinner />}

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

        {!loading && filteredApps.length > 0 ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredApps.map((app) => (
              <ProductsCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          !loading && <NotFoundError />
        )}
      </div>
    </div>
  );
};

export default Apps;
