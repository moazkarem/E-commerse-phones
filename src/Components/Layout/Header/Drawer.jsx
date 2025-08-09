import { useCallback, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/logo192.png";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { AiFillHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import {
  FaBlog,
  FaBoxOpen,
  FaTags,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";

const Drawer = ({ isDrawerOpen, setIsDrawerOpen, toggleDrawer }) => {
  const drawerRef = useRef(null);

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, [setIsDrawerOpen]);

  const handleClickOutside = useCallback(
    (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeDrawer();
      }
    },
    [closeDrawer]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const { getCart } = useSelector((state) => state.cartRed);
  const productsCart = getCart?.data?.products || [];

  const logoutHandler = () => {
    localStorage.removeItem("userData");
  };

  return (
    <div className="relative" ref={drawerRef} style={{ zIndex: "50" }}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={toggleDrawer}
      />
      <div className="drawer-content"></div>

      <div className="drawer-side w-75 bg-transparent">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-[#111] p-4 w-80 fixed h-full flex flex-col justify-between">
          {/* الجزء العلوي */}
          <div className="overflow-y-auto flex-1">
            <li className="text-center">
              <div className="mb-8 flex items-center">
                <img className="w-9 me-2" src={logo} alt="logo" />
                <h3 className="text-2xl text-white font-bold">Z-Line</h3>
              </div>
            </li>

            <li className="text-lg px-2 py-3">
              <NavLink
                to="/"
                className="flex items-center gap-[30px] text-white hover:text-[#ed1d24]"
              >
                <AiFillHome size={20} />
                Home
              </NavLink>
            </li>

            <li className="text-lg px-2 py-3">
              <NavLink
                to="/categories"
                className="flex items-center gap-[30px] text-white hover:text-[#ed1d24]"
              >
                <BiCategory size={20} />
                Categories
              </NavLink>
            </li>

            <li className="text-lg px-2 py-3">
              <NavLink
                to="/blogs"
                className="flex items-center gap-[30px] text-white hover:text-[#ed1d24]"
              >
                <FaBlog size={20} />
                Blog
              </NavLink>
            </li>

            <li className="text-lg px-2 py-3">
              <NavLink
                to="/brands"
                className="flex items-center gap-[30px] text-white hover:text-[#ed1d24]"
              >
                <FaBoxOpen size={20} />
                Products
              </NavLink>
            </li>

            <li className="text-lg px-2 py-3">
              <NavLink
                to="/products"
                className="flex items-center gap-[30px] text-white hover:text-[#ed1d24]"
              >
                <FaTags size={20} />
                Brands
              </NavLink>
            </li>

            <li className="text-lg px-2 py-3">
              <NavLink
                to="/about"
                className="flex items-center gap-[30px] text-white hover:text-[#ed1d24]"
              >
                <FaInfoCircle size={20} />
                About
              </NavLink>
            </li>

            <li className="text-lg px-2 py-3">
              <NavLink
                to="/contact"
                className="flex items-center gap-[30px] text-white hover:text-[#ed1d24]"
              >
                <FaPhoneAlt size={20} />
                Contact
              </NavLink>
            </li>

            <li className="text-lg px-2 py-3">
              <NavLink
                to="/cart"
                className="flex items-center gap-[30px] text-white hover:text-[#ed1d24]"
              >
                <div className="flex justify-start gap-[30px] items-center cursor-pointer">
                  <div className="relative">
                    <BsHandbag size={24} className="text-white" />
                    <span className="absolute -top-2 -right-2 bg-[#ed1d24] text-white text-xs px-[6px] py-[2px] rounded-full">
                      {productsCart.length || 0}
                    </span>
                  </div>
                  <span className="text-white text-lg">Cart</span>
                </div>
              </NavLink>
            </li>
          </div>

          <li className="text-lg px-2 py-3  w-full ">
            <button
              className="w-full flex justify-center  text-lg py-2 rounded-full bg-[#333] hover:bg-[#222] text-white"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
