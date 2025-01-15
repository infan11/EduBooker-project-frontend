import React from "react";

const reviews = [
    {
        "name": "Rahim Uddin",
        "rating": 4.5,
        "review": "The admission process was smooth, and the faculty is excellent!",
        "date": "2025-01-10"
    },
    {
        "name": "Sabbir Ahmed",
        "rating": 4.0,
        "review": "The college environment is very supportive and friendly.",
       "date": "2025-01-08"
    },
    {
        "name": "Tanvir Hossain",
        "rating": 5.0,
        "review": "I had an amazing experience here. Highly recommend!",
        "date": "2025-01-07"
    },
    {
        "name": "Arif Chowdhury",
        "rating": 3.8,
        "review": "Good facilities, but some areas need improvement.",
        "date": "2025-01-06"
    },
    {
        "name": "Jahid Hasan",
        "rating": 4.2,
        "review": "Great campus and activities. Learned a lot!",
        "date": "2025-01-05"
    }
]

const ReviewSection = () => {
  return (
    <div className="bg-gray-100 py-10">
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
