import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from './Home';

const Error = () => {

const error = useRouteError()
  return (
    <>
                  {/* <Home/> */}
                  <Navbar />
                  <div>{error.message}</div>
                  <Footer />
  </>
  
  )
}

export default Error;