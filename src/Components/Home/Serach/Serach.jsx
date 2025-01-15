import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCollegesHooks from "../../Hooks/useCollegesHooks";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [colleges] = useCollegesHooks(); 

  const filteredColleges = searchQuery.length > 0 ? colleges.filter((college) =>
          college.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-3">
      
      <div className="flex mt-16 bg-white shadow-2xl border-4 rounded-lg relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl font-bold">
          <IoSearch />
        </div>
        <input
          type="text"
          placeholder="Search Your Information"
          className="w-full p-3 pl-14 font-bold rounded-lg bg-transparent border-4 border-white focus:outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {searchQuery.length > 0 && (
        <div className="max-w-7xl mx-auto px-7 mt-5">
          <div className="grid md:grid-cols-3 gap-5">
            {filteredColleges.length > 0 ? (
              filteredColleges.map((college) => (
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
            <button className="mt-4 w-full btn bg-white text-black py-2 px-4 rounded shadow-md hover:bg-white">
              Details
            </button>
          </div>
        </div>
              ))
            ) : (
              <p className="text-white font-bold text-center mt-5">
                No colleges found matching your search.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
