import React from 'react';
import { useRouteError } from 'react-router';
import { Undo2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import NotFoundPage from '../assets/App-Error.png';

const NotFoundError = () => {
  const navigate = useNavigate(); 
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-screen">
      <img src={NotFoundPage} alt="NotFoundPage" className="mb-4 w-64 md:w-80 lg:w-96" />

      <section className="flex flex-col items-center justify-center py-4 px-4 text-center">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold leading-tight mx-auto">
          Oops!! App Not Found
        </h1>

        <p className="pt-2 pb-4 text-gray-600 text-base md:text-md mx-auto">
          The app you are requesting is not found on our system. Please try another app.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="btn font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-[17px] flex items-center gap-2"
        >
          <Undo2 />
          Go Back!
        </button>

        {error && <p className="mt-4 text-red-500">{error.message}</p>}
      </section>
    </div>
  );
};

export default NotFoundError;
