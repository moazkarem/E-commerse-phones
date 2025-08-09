import { useCallback, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/logo192.png";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";
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

  const logoutHandeler = () => {
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
      <div className="drawer-side w-75 bg-transparent ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu menu-vertical bg-[#111]  p-4 w-80 fixed h-full ">
          <li className="text-center ">
            <div className="mb-8 flex items-center flex-1 lg:flex-none text-center lg:text-left">
              <img className="w-9 me-2" src={logo} alt="logo " />
              <h3 className="text-2xl text-white font-bold"> Z-Line </h3>
            </div>
          </li>
          <li className="text-lg p-2">
            <NavLink
              to="/"
              className="text-white hover:text-[#ed1d24] hover:bg-transparent text-lg "
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg p-2">
            <NavLink
              to="/categories"
              className="text-white hover:text-[#ed1d24] "
            >
              Categories
            </NavLink>
          </li>
          <li className="text-lg p-2">
            <NavLink to="/blogs" className="text-white hover:text-[#ed1d24] ">
              Blog
            </NavLink>
          </li>
          <li className="text-lg p-2">
            <NavLink to="/brands" className="text-white hover:text-[#ed1d24] ">
              Products
            </NavLink>
          </li>
          <li className="text-lg p-2">
            <NavLink
              to="/products"
              className="text-white hover:text-[#ed1d24] "
            >
              Brands
            </NavLink>
          </li>
          <li className="text-lg p-2">
            <NavLink to="/about" className="text-white hover:text-[#ed1d24] ">
              About
            </NavLink>
          </li>
          <li className="text-lg p-2">
            <NavLink to="/contact" className="text-white hover:text-[#ed1d24] ">
              Contact
            </NavLink>
          </li>
          <div
            className="flex ps-5 pe-3 justify-between items-center gap-2 mt-4 cursor-pointer"
            onClick={() => {
              closeDrawer();
              navigate("/cart");
            }}
          >
            <span className="text-white text-lg">Cart</span>
            <div className="relative">
              <BsHandbag size={24} className="text-white" />
              <span className="absolute -top-2 -right-2 bg-[#ed1d24] text-white text-xs px-[6px] py-[2px] rounded-full">
                {productsCart.length || 0}
              </span>
            </div>
          </div>
          <button
            className="mt-8 text-lg p-2 flex justify-center items-center py-2 rounded-full bg-[#333] hover:bg-[#222]"
            onClick={logoutHandeler}
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
