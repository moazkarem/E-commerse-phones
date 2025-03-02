import { useState, useEffect } from "react";
import Drawer from "./Drawer";
import Button from "../../../Ui/Button";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/logo192.png"
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      
      <div
        className={`navbar  ${
          scrollY > 150 ? "bg-[#222]" : "bg-transparent "
        } transition-all duration-500 fixed top-0 w-full z-50 h-20`}
      >
        <div className="container mx-auto px-4 flex justify-between  items-center sm:flex ">
          <div className="flex items-center lg:hidden">
            <button
              className="btn btn-square text-white me-3 btn-ghost"
              onClick={toggleDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-7 w-7 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className=" flex gap-3 items-center flex-1 lg:flex-none text-center lg:text-left ">
            <img
              className="w-9 me-2"
              src={logo}
              alt="logo "
            />
            <h3 className="text-2xl text-white font-bold max-[450px]:hidden"> Z-Line </h3>
          </div>
          <div className="hidden lg:flex flex-1 justify-center space-x-4">
            <ul className="menu menu-horizontal p-0">
              <li className="text-lg p-2">
                <NavLink
                  to="/"
                  className="text-white hover:text-[#ed1d24] hover:bg-transparent font-bold"
                >
                  Home
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/categories"
                  className="text-white hover:text-[#ed1d24] hover:bg-transparent font-bold"
                >
                  Categories
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/blogs"
                  className="text-white hover:text-[#ed1d24] hover:bg-transparent font-bold"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/about"
                  className="text-white hover:text-[#ed1d24] hover:bg-transparent font-bold"
                >
                  About
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/contact"
                  className="text-white hover:text-[#ed1d24] hover:bg-transparent font-bold"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-none">
            <Button
              style={`text-[#fff] bg-[#ed1d24] btn-sm  rounded-full btn text-[16px] py-1  px-12 max-[450px]:px-8 hover:bg-[#ed1d24]`}
            >
              LOGIN{" "}
            </Button>
          </div>
        </div>
      </div>
      <Drawer
        toggleDrawer={toggleDrawer}
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
};

export default Navbar;
