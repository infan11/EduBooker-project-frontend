import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-hot-toast"; // Make sure you import toast

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error("Failed to log out");
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <NavLink to="/">
        {({ isPending }) => <span>HOME {isPending && <Spinner />}</span>}
      </NavLink>
      <NavLink to="/colleges">
        {({ isPending }) => <span>COLLEGES {isPending && <Spinner />}</span>}
      </NavLink>
      <NavLink to="/admission">
        {({ isPending }) => <span>ADMISSION {isPending && <Spinner />}</span>}
      </NavLink>
      <NavLink to="/login">
        {({ isPending }) => <span>LOGIN {isPending && <Spinner />}</span>}
      </NavLink>
      <NavLink to="/register">
        {({ isPending }) => <span>REGISTER {isPending && <Spinner />}</span>}
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#ffff] shadow-md rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn text-black btn-ghost lg:hidden">
              <p className="text-2xl"><MdOutlineMenu /></p>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-[#ffff] px-3 text-black rounded-box z-[1] mt-3 w-60 p-4 shadow"
            >
              <li className="hover:bg-white hover:text-black font-bold rounded-lg">{navLinks}</li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-black w-20">
            <img src="https://i.ibb.co.com/ZSyWm9f/iconLogo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-extrabold text-black">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User"
                  src={user?.photoURL || "https://via.placeholder.com/150"}
                  className="w-10 rounded-full"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu h-64 text-black dropdown-content bg-[#ffff] rounded-box z-[1] mt-3 w-80 p-2 shadow-md"
            >
            <Link to={"/profile"}>  <img className="w-28 h-28 mx-auto rounded-full" src={user?.photoURL || "https://via.placeholder.com/150"} alt="" /></Link>
              <li>
                <a href="/profile" className="justify-between hover:bg-white hover:text-black font-bold">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li className="hover:bg-white hover:text-black font-bold rounded-lg"><a>{user?.displayName}</a></li>
              {user ? (
                <li className="hover:bg-white hover:text-black font-bold rounded-lg">
                  <a onClick={handleLogout}>Logout</a>
                </li>
              ) : (
                <li className="hover:bg-white hover:text-black font-bold rounded-lg">
                  <a href="/login">Login</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
