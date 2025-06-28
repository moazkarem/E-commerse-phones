import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPinterestP,
  FaLocationDot,
  FaPhone,
  FaRegEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#000] bg-fixed relative mt-10 py-20 flex justify-between flex-wrap max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem]">
        {/* <div className="absolute inset-0 bg-[#ed1d24]/40 backdrop-blur-md backdrop-brightness-75 z-0"></div> */}
        <div className="relative z-10 max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-3/12 max-sm:flex max-sm:justify-center mt-5">
          <div className="space-y-5">
            <h2 className="text-white text-4xl font-bold capitalize mb-0">
              Z-LINE
            </h2>
            <p className="text-gray-300 text-base capitalize">
              The Perfect Place For Every Contemporary Furniture Store And
              Manufacturer. This Is Furnival
            </p>
            <div className="flex space-x-1">
              <span className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-[#ff0000cc] hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center flex justify-center">
                <FaFacebookF />
              </span>
              <span className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-[#ff0000cc] hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center flex justify-center">
                <FaTwitter />
              </span>
              <span className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-[#ff0000cc] hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center flex justify-center">
                <FaInstagram />
              </span>
              <span className="rounded-md bg-gray-500 bg-opacity-50 text-white py-2 hover:bg-[#ff0000cc] hover:bg-opacity-100 transition duration-700 cursor-pointer group w-10 text-center flex justify-center">
                <FaWhatsapp />
              </span>
           
            </div>
          </div>
        </div>

        <div className="relative z-10 max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-2/12 xl:ms-5 space-y-5 max-sm:my-5 mt-5">
          <h3 className="font text-white font-semibold text-xl capitalize" style={{letterSpacing:'2px'}}>
            quick links
          </h3>
          <hr className="border-gray-300 w-14" />
          <div>
            <ul className=" text-gray-300 font-semibold list-disc px-3 ">
              <li className=" hover:text-[#ff0000cc] hover:translate-x-3 duration-300 cursor-pointer">
                About Us
              </li>
              <li className=" hover:text-[#ff0000cc] hover:translate-x-3 duration-300 cursor-pointer">
                Blogs & Articles
              </li>
              <li className=" hover:text-[#ff0000cc] hover:translate-x-3 duration-300 cursor-pointer">
                Our Products
              </li>
              <li className=" hover:text-[#ff0000cc] hover:translate-x-3 duration-300 cursor-pointer">
               Brands
              </li>
              <li className=" hover:text-[#ff0000cc] hover:translate-x-3 duration-300 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-3/12 xl:ms-5 space-y-5 max-sm:my-5 mt-5">
          <h3 className="font text-white font-semibold text-xl capitalize" style={{letterSpacing:'2px'}}>
            categories
          </h3>
          <hr className="border-gray-300 w-14" />
          <div>
            <div>
              <ul className=" text-gray-300 font-semibold list-disc px-3 grid grid-cols-2">
                <li className=" hover:text-[#ff0000cc] hover:translate-x-3 duration-300 cursor-pointer">
                  sofas
                </li>
                <li className=" hover:text-[#ff0000cc] hover:translate-x-3 duration-300 cursor-pointer">
                  chairs
                </li>
                <li className=" hover:text-[#ff0000cc] hover:translate-x-3 duration-300 cursor-pointer">
                  doors
                </li>
                <li className=" hover:text-[#ff0000cc] hover:translate-x-3 duration-300 cursor-pointer">
                  lamps
                </li>
                <li className=" hover:text-[#ff0000cc] hover:translate-x-3 duration-300 cursor-pointer">
                  tables
                </li>
                <li className=" hover:text-[#ff0000cc] hover:translate-x-3 duration-300 cursor-pointer">
                  drawers
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-sm:w-10/12 sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-3/12 space-y-5 mt-5">
          <h3 className="font text-white font-semibold text-xl capitalize" style={{letterSpacing:'2px'}}>
            contact
          </h3>
          <hr className="border-gray-300 w-14" />
          <div>
            <div className="flex space-x-2 text-gray-300 py-1">
              <FaLocationDot />
              <span>Qunater, Giza, Egypt</span>
            </div>
            <div className="group flex space-x-2 cursor-pointer">
              <span className="text-gray-300 py-1 group-hover:text-gray-300 duration-300">
                <FaRegEnvelope />
              </span>
              <span className=" text-gray-300  group-hover:text-[#ff0000cc]  duration-300">
                Zline@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 group cursor-pointer">
              <span className="py-1 group-hover:text-gray-300 duration-300 text-gray-300">
                <FaPhone />
              </span>
              <span className="text-gray-300  group-hover:text-[#ff0000cc]  duration-300">
                +2010 9565 2781
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap bg-[#000] border-t border-t-1 border-[#a9afc3] opacity-80 justify-around py-8 ">
        <div className="flex flex-wrap gap-5">
          <a className=" text-gray-300 hover:text-[#ff0000cc] ease-in-out duration-300 cursor-pointer  ">
            Terms To Use
          </a>
          <a className=" text-gray-300 hover:text-[#ff0000cc] ease-in-out duration-300 cursor-pointer  ">
            Privcy Policy
          </a>
        </div>
        <div className=" text-gray-300">
          2025 © Zline. All Rights are Reserved || Built By Moaz Karem
        </div>
      </div>
    </footer>
  );
};

export default Footer;
