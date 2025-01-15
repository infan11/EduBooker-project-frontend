import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ReviewSection = () => {
  const axiosSecure = useAxiosSecure()
const {data : reviews  = []} = useQuery({
    queryKey : ["reviews"],
    queryFn : async () => {
        const res = await axiosSecure.get("/reviews")
        console.log(res.data);
        return res.data;
    }

    
})

  return (
    <div  data-aos="fade-up" className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold mb-8">Reviews</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg border-t-4 border-black"
          >
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.date}</p>
            <p className="mt-2 text-gray-700">{review.review}</p>
            <p className="mt-2 font-bold">Rating: {review.rating}⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
