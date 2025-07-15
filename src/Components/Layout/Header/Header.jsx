import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import Button from "../../../Ui/Button";
import logo from "../../../../public/logo192.png";
import { FaUserCircle } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { getCartAction } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const storageKey = "userData";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const userName = userData?.data?.data.name;
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(storageKey);
    localStorage.removeItem("wishlist");
    navigate("/login");
  };

  //=============cart quantity
  const dispatch = useDispatch();
  const { getCart } = useSelector((state) => state.cartRed);
  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);
  const productsCart = getCart?.data?.products;

  return (
    <div>
      <div
        className={`navbar ${scrollY > 40 ? "bg-[#222]" : "bg-transparent"} 
        transition-all duration-500 fixed top-0 w-full z-50 h-20`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center sm:flex">
          <div className="flex items-center lg:hidden">
            <button
              className="btn btn-square text-white me-3 btn-ghost"
              onClick={toggleDrawer}
              data-testid="toggle-icon"
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
          <Link to={"/"}>
            <div className="flex gap-3 items-center flex-1 lg:flex-none text-center lg:text-left">
              <img
                className="w-9 me-2"
                src={logo}
                alt="logo"
                data-testid="logo"
              />
              <h3
                className="text-2xl text-white font-bold max-[450px]:hidden"
                data-testid="logo-title"
              >
                Z-Line
              </h3>
            </div>
          </Link>
          <div className="hidden lg:flex flex-1 justify-center space-x-4">
            <ul data-testid="pages-items" className="menu menu-horizontal p-0">
              {[
                "Home",
                "Categories",
                "Blogs",
                "Products",
                "About",
                "Contact",
              ].map((item) => (
                <div key={item} data-testid={item}>
                  {item === "Home" ? (
                    <li className="text-lg p-2">
                      <NavLink
                        data-testid={`/${item}`}
                        to={`/`}
                        className="text-white hover:text-[#ed1d24] hover:bg-transparent"
                      >
                        {item}
                      </NavLink>
                    </li>
                  ) : (
                    <li className="text-lg p-2">
                      <NavLink
                        data-testid={`/${item}`}
                        to={`/${item.toLowerCase()}`}
                        className="text-white hover:text-[#ed1d24] hover:bg-transparent"
                      >
                        {item}
                      </NavLink>
                    </li>
                  )}
                </div>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-x-6">
            {userName ? (
              <div data-testid="loggedUserSection" className="relative flex items-center gap-x-10">
                <div onClick={() => navigate("/cart")} className="relative">
                  <BsHandbag size={31} className="text-white cursor-pointer" />
                  <span className="absolute -top-2 -right-2 bg-[#ed1d24] text-white text-xs  px-[6px] py-[2px] rounded-full">
                    {productsCart?.length || 0}
                  </span>
                </div>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 text-white text-lg"
                  >
                    <FaUserCircle size={24} />
                    <span className="capitalize">{userName}</span>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg overflow-hidden">
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate("/profile");
                        }}
                        className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          handleLogout();
                        }}
                        className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <NavLink to={"/login"}>
                <Button
                  style={`text-[#fff] bg-[#ed1d24] rounded-full text-[18px] py-[6px] font-light px-12 max-[450px]:px-8 hover:bg-[#ed1d24]`}
                >
                  LOGIN
                </Button>
              </NavLink>
            )}
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
