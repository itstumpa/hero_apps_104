import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Page404 from '../assets/error-404.png';
import { Undo2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import React, { useState, useEffect } from 'react';
import "../components/LoadingSpinner/LoadingSpinner.css"; 

const Error = () => {
  const navigate = useNavigate(); 
  const error = useRouteError();


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <img src={Page404} alt="404 Not Found" className="mb-4" />

        <section className="flex flex-col items-center justify-center py-4 px-4 text-center">
          <h1 className="text-lg md:text-2xl lg:text-4xl font-bold leading-tight mx-auto">
            Oops, page not found!
          </h1>

          <p className="pt-2 pb-4 text-gray-600 text-base md:text-md mx-auto">
            The page you are looking for is not available.
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

      <Footer />
    </>
  );
};

export default Error;
