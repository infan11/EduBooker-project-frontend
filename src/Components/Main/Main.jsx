import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Main = () => {
    const loaction = useLocation()
    const noNavbarFooter = ["/login" , "/register" , "/forgotPassword"].includes(loaction.pathname)
    return (
        <div>
        { noNavbarFooter ||    <Navbar/>}
            <Outlet/>
            {noNavbarFooter || <Footer/>}
        </div>
    );
};

export default Main;