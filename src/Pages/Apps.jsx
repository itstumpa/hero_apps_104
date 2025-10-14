import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "../components/TrendingApps/ProductsCard";
import NotFoundError from "../Pages/NotFoundError.jsx";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.jsx";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch apps on mount
  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get("/Datafetch.json");
        setApps(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load apps. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search.trim().toLowerCase());
    }, 300); // 300ms debounce

    return () => clearTimeout(handler);
  }, [search]);

  const filteredApps = debouncedSearch
    ? apps.filter((app) =>
        app.title.toLowerCase().includes(debouncedSearch)
      )
    : apps;

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => setSearch("");

  if (loading) return <LoadingSpinner />;

  return (
    <div className="py-10 md:py-22 px-4 md:px-8 lg:px-12 relative mx-auto max-w-[1600px]">
      <h2 className="text-4xl font-bold mb-3 text-center text-gray-800">
        Our Applications
      </h2>
      <p className="mb-8 text-center text-md">
        Explore all apps on the market developed by us. We code for millions.
      </p>

      <div className="px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-semibold">
            All Apps{" "}
            <span className="text-sm text-gray-500">
              {filteredApps.length} Apps Found
            </span>
          </h1>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search apps..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {search && (
              <button
                onClick={clearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
