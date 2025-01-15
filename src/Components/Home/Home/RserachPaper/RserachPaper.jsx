import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const RserachPaper = () => {
    const axiosSecure = useAxiosSecure()
    const {data : papers  = []} = useQuery({
        queryKey : ["papers"],
        queryFn : async () => {
            const res = await axiosSecure.get("/papers")
            console.log(res.data);
            return res.data;
        }
    
        
    })
    
    return (
        <div>
            <div className="my-10 px-5">
  <h2 className="text-2xl font-bold text-center mb-6">Research Papers by Students</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {papers .map((paper, index) => (
      <div
        key={index}
        className="p-4 border rounded-lg shadow-lg  transition-shadow duration-300 hover:shadow-xl"
      >
        <h3 className="text-lg font-semibold">{paper.title}</h3>
        <p className="text-sm text-gray-600 mb-2">Author: {paper.author}</p>
        <a
          href={paper.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black  shadow-xl hover:underline"
        >
          Read Full Paper
        </a>
      </div>
    ))}
  </div>
</div>

        </div>
    );
};

export default RserachPaper;