import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
           <Header/>
           {/* <Hero/>
           <FeaturesSection></FeaturesSection> */}

           <div >

            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;