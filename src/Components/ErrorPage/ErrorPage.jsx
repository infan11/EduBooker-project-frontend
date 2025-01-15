import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co/gDT5D18/freepik-error-66736.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
     <Link to={"/"}> <h1 className="mb-5 text-5xl font-bold">Return  HOME</h1></Link>
      
      
    </div>
  </div>
</div>
        </div>
    );
};

export default ErrorPage;