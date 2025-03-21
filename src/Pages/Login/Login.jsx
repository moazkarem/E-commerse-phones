import React from "react";
import { CiLock } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#141414] px-4">
      <div className="bg-[#111] p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-center text-[20px] mb-6">Login</h2>
        <form className="flex flex-col space-y-8">
          <div className="relative">
            <MdOutlineMarkEmailRead className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6c757d] text-xl" />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b-2 border-[#6c757d] px-10 py-4 focus:outline-none bg-transparent text-white"
            />
          </div>

          <div className="relative">
            <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6c757d] text-xl" />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b-2 border-[#6c757d] px-10 py-4 focus:outline-none bg-transparent text-white"
            />
          </div>

          <button className="w-full bg-[rgba(255,0,0,0.8)] text-white py-3 rounded-md hover:bg-[#ff0000] transition">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          You Don't Have an Account?{" "}
          <Link to="/register" className="text-[#ed1d24] ps-2">
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
