import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    const loaction = useLocation()
    const noNavbarFooter = ["/login" , "/register" , "/forgotPassword"].includes(loaction.pathname)
    return (
        <div>
        { noNavbarFooter ||    <Navbar/>}
            <Outlet/>
        </div>
    );
};

export default Main;