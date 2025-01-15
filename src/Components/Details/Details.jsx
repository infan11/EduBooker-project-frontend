import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";

const Details = () => {
  const { id } = useParams();
  const [college, setCollege] = useState({
    name: "",
    location: "",
    established: "",
    campusType: "",
    admissionDates: "",
    eligibility: "",
    fees: "",
    facilities: [],
    researchHistory: "",
    researchPapers: [],
    sports: [],
    reviews: [],
    phone: "",
    email: "",
    website: "",
    image: "",
  });

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth(null);

  useEffect(() => {
    axiosSecure.get(`/colleges/${id}`).then((res) => setCollege(res.data));
  }, [id, axiosSecure]);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 min-h-screen">
      <Helmet>
                <title>EDUBOOKER - COLLGEGS/DETAILS</title>
            </Helmet>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image Section */}
        <div className="flex-shrink-0 md:w-[50%]">
          <img
            src={college.image}
            alt={college.name || "College Image"}
            className="w-[700px] h-[400px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Data Section */}
        <div className="flex flex-col md:w-[50%] h-full border rounded-lg p-6 shadow-lg">
     <div className="grid md:grid-cols-2 gap-3">
     <div>
      <h1 className="text-3xl font-bold my-4">{college.name}</h1>
          <p><strong>Location:</strong> {college.location}</p>
          <p><strong>Established:</strong> {college.established}</p>
          <p><strong>Campus Type:</strong> {college.campusType}</p>

          {college.facilities.length > 0 && (
            <div className="my-6">
              <h2 className="text-2xl font-semibold mb-2">Campus Facilities</h2>
              <ul className="list-disc pl-6">
                {college.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
          )}
 <p><strong>Fees:</strong> {college.fees}</p>
 <p><strong>Requirement:</strong> {college.eligibility}</p>
          {college.researchPapers.length > 0 && (
            <div className="my-6">
              <h2 className="text-2xl font-semibold mb-2">Research</h2>
              <p>{college.researchHistory || "No research history available."}</p>
              <ul className="list-disc pl-6">
                {college.researchPapers.map((paper, index) => (
                  <li key={index}>
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 underline"
                    >
                      {paper.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
<div>
    
{college.sports.length > 0 && (
            <div className="my-6">
              <h2 className="text-2xl font-semibold mb-2">Sports</h2>
              <ul className="list-disc pl-6">
                {college.sports.map((sport, index) => (
                  <li key={index}>{sport}</li>
                ))}
              </ul>
            </div>
          )}

          {college.reviews.length > 0 && (
            <div className="my-6">
              <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
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

          <div className="my-6">
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p><strong>Phone:</strong> {college.phone}</p>
            <p><strong>Email:</strong> {college.email}</p>
           
            {college.website && (
              <a
                href={college.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 underline"
              >
                Visit Website
              </a>
            )}
          </div>
        <Link to={"/admission"}>
        <button className="btn  w-full bg-white hove:bg-white text-black"> Apply</button>
        </Link>
</div>
     </div>
        </div>
      
      </div>
    </div>
  );
};

export default Details;
