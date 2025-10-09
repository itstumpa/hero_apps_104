import React from "react";
import { Download } from "lucide-react";
import Star from "../../assets/icon-ratings.png";
import { useNavigate } from "react-router";

const ProductsCard = ({ app }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/apps/${app.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="card bg-white shadow-md hover:shadow-lg hover:scale-105 transition ease-in-out rounded-xl overflow-hidden cursor-pointer"
    >
      <figure className="p-3 rounded-md">
        <img
          src={app.image}
          alt={app.title}
          className="rounded-md h-56 sm:h-60 md:h-64 lg:h-72 w-full object-cover"
        />
      </figure>
      <div className="px-4 pb-4">
        <h3 className="font-semibold text-lg sm:text-lg md:text-xl lg:text-xl mb-2">
          {app.title}
        </h3>
        <div className="flex justify-between text-sm sm:text-sm md:text-base lg:text-base text-gray-600">
          <span className="flex items-center gap-1 bg-gray-100 p-2 rounded-md text-green-400 font-semibold">
            <Download className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
            {app.downloads}
          </span>
          <span className="flex items-center gap-1 bg-amber-100 p-2 rounded-md text-amber-400 font-semibold">
            <img
              src={Star}
              alt=""
              className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5"
            />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
