import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-[20px] text-[#ed1d24] mb-5 ">Write Comment Here</h1>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-6 col-span-12">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full h-[45px] md:h-[55px] px-4 rounded-[8px] bg-[#222] text-white outline-none border border-[#444] text-[14px] md:text-[16px]"
          />
        </div>

        <div className="md:col-span-6 col-span-12">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full h-[45px] md:h-[55px] px-4 rounded-[8px] bg-[#222] text-white outline-none border border-[#444] text-[14px] md:text-[16px]"
          />
        </div>

        <div className="col-span-12">
          <textarea
            placeholder="Your Message"
            className="w-full min-h-[150px] px-4 py-3 rounded-[8px] bg-[#222] text-white outline-none border border-[#444] text-[14px] md:text-[16px]"
          ></textarea>
        </div>

        <div className="col-span-12">
          <button className="w-[180px] h-[55px] bg-[#ff0000cc] text-white rounded-[10px] transition-all duration-300 hover:opacity-90">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
