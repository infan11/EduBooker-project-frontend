import React from 'react';
import useCollegesHooks from '../../Hooks/useCollegesHooks';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const HomeCard = () => {
    const [colleges] = useCollegesHooks();
    const {user} = useAuth();
    const navigate = useNavigate();
    const hanndleClick = () => {
      if(!user){
        navigate("/login")
      }
    }
    return (
        <div  data-aos="fade-up">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {colleges.map((college) => (
        <div
          key={college.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={college.image}
            alt={college.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{college.name}</h3>
            <p className="text-gray-600">
              <strong>Admission Dates:</strong> {college.admissionDates}
            </p>
            <p className="text-gray-600">
            <p><strong>Location:</strong> {college.location}</p>
            </p>
            {college.reviews.length > 0 && (
            <div className="my-3">
              {college.reviews.map((review, index) => (
                <div key={index} className="border p-4 mb-2">
                  <p>
                    <strong>{review.reviewer}</strong> ({review.rating}⭐):
                  </p>
                  <p>{review.text}</p>
                </div>
              ))}
            </div>
          )}
         
            {
              user  ? (<Link to={`/details/${college._id}`}>
              <button className="mt-4 w-full btn bg-white text-black py-2 px-4 rounded shadow-md hover:bg-white">
                Details
              </button>
              </Link>) : (

<button onClick={hanndleClick} className="mt-4 w-full btn bg-white text-black py-2 px-4 rounded shadow-md hover:bg-white">
  Details
</button>

              )
            }
          </div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default HomeCard;