import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCollegesHooks from "../../Hooks/useCollegesHooks";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const MyCollege = () => {
  const axiosSecure = useAxiosSecure();
  const [colleges] = useCollegesHooks()
  const { data: candidates = [] } = useQuery({
    queryKey: ["candidates"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admissionForm");
      return res.data;
    },
  });

  const [reviews, setReviews] = useState({});
  const handleAddReview = async (collegeName, reviewerName, newReviewText, newRating) => {
    if (newReviewText.trim() && newRating > 0) {
      const reviewObject = {
        reviewer: reviewerName,
        text: newReviewText,
        rating: newRating,
      };
  
      try {
        const res = await axiosSecure.put(`/colleges/${collegeName}`, { review: reviewObject });
        console.log("Review added:", res.data);
        if(res.data.modifiedCount > 0){
            toast.success("Thank Your For Review")
        }
   
        setReviews((prevReviews) => ({
          ...prevReviews,
          [collegeName]: [...(prevReviews[collegeName] || []), reviewObject],
        }));
      } catch (error) {
        console.error("Error adding review:", error);
      }
    }
  };
  


  return (
    <div  data-aos="fade-up" className="p-4 max-w-7xl mx-auto bg-white min-h-screen">
        <Helmet>
                <title>EDUBOOKER - MyCollegea</title>
            </Helmet>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <div
            key={candidate._id}
            className="rounded overflow-hidden shadow-lg bg-white"
          >
            {/* Candidate Information */}
            <img
              className="w-full h-48 object-cover"
              src={candidate.photo}
              alt={`${candidate.candidateName}'s Photo`}
            />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{candidate.candidateName}</h2>
              <p className="text-gray-700 text-sm">
                <strong>College:</strong> {candidate.collegeName}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Country:</strong> {candidate.country}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>State:</strong> {candidate.state_category}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>District:</strong> {candidate.district}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Email:</strong> {candidate.email}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Contact:</strong> {candidate.contactNumber}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Address:</strong> {candidate.address}
              </p>
            </div>

            {/* Review Section */}
            <div className="review-system p-4 bg-gray-50">
              <h2 className="text-lg font-semibold">Add a Review</h2>
              <textarea
                onChange={(e) =>
                  setReviews((prev) => ({
                    ...prev,
                    [`temp-${candidate._id}-text`]: e.target.value,
                  }))
                }
                placeholder="Write your review..."
                rows="3"
                className="w-full p-2 border rounded-lg mb-2"
                value={reviews[`temp-${candidate._id}-text`] || ""}
              />

              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className={`text-xl ${
                      star <= (reviews[`temp-${candidate._id}-rating`] || 0)
                        ? "text-orange-500"
                        : "text-gray-300"
                    }`}
                    onClick={() =>
                      setReviews((prev) => ({
                        ...prev,
                        [`temp-${candidate._id}-rating`]: star,
                      }))
                    }
                  >
                    ★
                  </button>
                ))}
              </div>

              <button
  onClick={() =>
    handleAddReview(
      candidate.collegeName, 
      candidate.candidateName,
      reviews[`temp-${candidate._id}-text`] || "",
      reviews[`temp-${candidate._id}-rating`] || 0
    )
  }
  className="px-4 py-2 bg-white text-white rounded-lg hover:bg-white"
>
  Submit Review
</button>

           
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCollege;
