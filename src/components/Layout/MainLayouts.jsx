// import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const MainLayouts = () => {
      return (
            <div className='flex flex-col min-h-screen'>
                  <Navbar />
                  <div className='flex-1'>
                  <Outlet />

                  </div>
                  <Footer />
            </div>
      );
};

export default MainLayouts;