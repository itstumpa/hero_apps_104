import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Download, Star } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.jsx"; 

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [allApps, setAllApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true); 
  const [originalInstalledApps, setOriginalInstalledApps] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get("/Datafetch.json");
        setAllApps(response.data);
      } catch (error) {
        console.error("Error fetching apps:", error);
      } finally {
        setTimeout(() => setLoading(false), 200);
      }
    };
    fetchApps();
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
    const installed = saved
      .map((id) => allApps.find((app) => app.id === id))
      .filter(Boolean);

    setInstalledApps(installed);
    setOriginalInstalledApps(installed); // Save original order
  }, [allApps]);

  const parseDownloads = (str) => {
    if (!str) return 0;
    let number = parseFloat(str.replace(/,/g, ""));
    if (str.toLowerCase().endsWith("k")) return number * 1000;
    if (str.toLowerCase().endsWith("m")) return number * 1000000;
    if (str.toLowerCase().endsWith("b")) return number * 1000000000;
    return number;
  };

  const handleSort = (order) => {
    setSortOrder(order);

    if (order === "") {
      setInstalledApps([...originalInstalledApps]);
      return;
    }

    let sorted = [...installedApps];
    sorted.sort((a, b) => {
      const aDownloads = parseDownloads(a.downloads);
      const bDownloads = parseDownloads(b.downloads);

      if (order === "high-low") return bDownloads - aDownloads;
      if (order === "low-high") return aDownloads - bDownloads;
      return 0;
    });

    setInstalledApps(sorted);
  };

  const uninstallApp = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will uninstall the app!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Uninstall!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = installedApps.filter((app) => app.id !== id);
        setInstalledApps(updated);
        localStorage.setItem(
          "installedApps",
          JSON.stringify(updated.map((app) => app.id))
        );
        Swal.fire("Uninstalled!", "App has been removed.", "success");
      }
    });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="py-10 md:py-22 px-6 md:px-12 max-w-[1600px] mx-auto">
      <h2 className="text-4xl font-bold mb-3 text-center text-gray-800">
        Your Installed Apps
      </h2>
      <p className="mb-8 text-center text-md">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <h2 className="text-xl font-bold">Installed Apps</h2>

          <select
            onChange={(e) => handleSort(e.target.value)}
            value={sortOrder}
            className="border px-3 py-2 rounded"
          >
            <option value="">Sort by Downloads</option>
            <option value="high-low">High-Low (Descending)</option>
            <option value="low-high">Low-High (Ascending)</option>
          </select>
        </div>

        <div className="grid grid-cols-1  gap-4">
          {installedApps.length > 0 ? (
            installedApps.map((app) => (
              <div key={app.id} className="p-4 rounded shadow bg-white">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex gap-4 items-center">
                    <img
                      src={app.image}
                      className="w-20 sm:w-24 md:w-28 object-cover rounded"
                    />
                    <div className="mt-1">
                      <p className="text-md font-semibold text-gray-800">
                        {app.title}
                      </p>
                      <div className="flex flex-row flex-wrap text-sm text-green-700 mt-1 gap-3">
                        <h3 className="flex items-center gap-1 text-green-500 font-semibold">
                          <Download className="w-5 h-5" />
                          {app.downloads}
                        </h3>
                        <h3 className="flex items-center gap-1 text-amber-500 font-semibold">
                          <Star className="w-5 h-5" />
                          {app.ratingAvg}
                        </h3>
                        <h3 className="text-gray-700 font-medium">{app.size}</h3>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => uninstallApp(app.id)}
                    className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No apps installed yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
