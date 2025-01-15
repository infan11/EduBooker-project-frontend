import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div data-aos="zoom-in">
        <div className="hero  lg:h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co.com/r613JwX/colleges-Home-Banner.png)'}}>
<div className="  hero-overlay bg-opacity-55"></div>
<div className="hero-content text-center text-neutral-content">
<div data-aos="zoom-out" className="max-w-md  p-10 rounded-2xl ">
  <h1 className="mb-5 text-3xl text-white font-bold font-mono ">YOUR FAVORITE COLLEGE</h1>
    <div className="flex">
   <Link to={"/serach"}> <input type="text" placeholder="Search Your Information " className="w-full border-white border-2 p-3 px-14 text-white font-bold rounded-full bg-transparent mb-8  hover:border-white" /></Link>
   <div className="mt-4 font-bold text-xl border-r-2 absolute ml-4">
 <div className="mr-3">
 <IoSearch />
 </div>
   </div>
    </div>
</div>
</div>
</div>
    </div>
    );
};

export default Banner;