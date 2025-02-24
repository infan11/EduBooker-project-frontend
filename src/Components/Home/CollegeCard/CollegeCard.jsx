import React from 'react';
import useCollegesHooks from '../../Hooks/useCollegesHooks';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const CollegeCard = () => {
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
              <h1 className='text-2xl font-bold text-center mt-7'>College Available</h1>
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
              
            </p>
            <p className="text-gray-600">
              <strong>Research History:</strong> {college.researchHistory}
            </p>
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

export default CollegeCard;