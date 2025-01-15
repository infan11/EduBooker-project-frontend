import React from 'react';
import useCollegesHooks from '../../Hooks/useCollegesHooks';

const CollegeCard = () => {
    const [colleges] = useCollegesHooks();
    return (
        <div>
              
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
              <strong>Events:</strong> {college.events.join(", ")}
            </p>
            <p className="text-gray-600">
              <strong>Research History:</strong> {college.researchHistory}
            </p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default CollegeCard;