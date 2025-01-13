import { NavLink } from "react-router-dom";

import { MdOutlineMenu } from "react-icons/md";
const Navbar = () => {
const navLinks = <>
  <NavLink to="/">
        {({ isPending }) => (
          <span>HOME {isPending && <Spinner />}</span>
        )}
      </NavLink>
  <NavLink to="/colleges">
        {({ isPending }) => (
          <span>COLLEGES {isPending && <Spinner />}</span>
        )}
      </NavLink>
  <NavLink to="/admission">
        {({ isPending }) => (
          <span>ADMISSION {isPending && <Spinner />}</span>
        )}
      </NavLink>
  <NavLink to="/login">
        {({ isPending }) => (
          <span>LOGIN {isPending && <Spinner />}</span>
        )}
      </NavLink>
  <NavLink to="/register">
        {({ isPending }) => (
          <span>REGISTER {isPending && <Spinner />}</span>
        )}
      </NavLink>

      
     
</>
    return (
        <div> 
          <div className="navbar bg-[#8103ffcc] rounded ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn text-white   btn-ghost lg:hidden ">
      <p className="text-2xl"><MdOutlineMenu /></p>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content  bg-[#8103ffd3] px-3 text-white  rounded-box z-[1] mt-3 w-60 p-4 shadow">
   <li className="hover:bg-white hover:text-black font-bold rounded-lg">    {navLinks}</li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white w-20"><img src="https://i.ibb.co.com/ZSyWm9f/iconLogo.png" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4 font-extrabold  text-white ">
        {navLinks}
     </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost  btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="image undifined"
            src="" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu h-64  text-white dropdown-content bg-[#8103ffd3]  rounded-box z-[1] mt-3 w-80 p-2 shadow">
    <img className="w-28 mx-auto rounded-full" src="https://i.ibb.co.com/ZSyWm9f/iconLogo.png" alt="" />
        <li>
          <a className="justify-between hover:bg-white hover:text-black font-bold">
            Profile 
            <span className="badge">New</span>
          </a>
        </li>
        <li className=" hover:bg-white hover:text-black font-bold rounded-lg"><a>Settings</a></li>
        <li className=" hover:bg-white hover:text-black font-bold rounded-lg"><a>Logout</a></li>
      </ul>
    </div>
  </div>

  </div>
</div>  
      
    );
};

export default Navbar;