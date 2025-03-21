import phone from "../../../public/svgs/phone.svg";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
const ContactUs = () => {
  return (
    <>
    <div >
        <BreadCrumb base={"Home"} page={"Contact Us"} />
      </div>
  <div className="grid grid-cols-2 max-md:grid-cols-1 items-start gap-8 ">
    <div className="pt-2">
      <form>
        <input
          placeholder="Enter Your Name"
          className="bg-transparent w-full ps-4 py-3 rounded-[5px] border outline-none text-sm text-[#a9afc3] mb-6"
        />
        <input
          placeholder="Enter Your Name"
          className="bg-transparent w-full ps-4 py-3 rounded-[5px] border outline-none text-sm text-[#a9afc3] mb-6"
        />
        <input
          placeholder="Enter Your Name"
          className="bg-transparent w-full ps-4 py-3 rounded-[5px] border outline-none text-sm text-[#a9afc3] mb-6"
        />
        <textarea
          placeholder="Enter Your Name"
          className="bg-transparent w-full h-[300px] ps-4 py-3 rounded-[5px] border outline-none text-sm text-[#a9afc3]"
        />
      </form>
    </div>
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl text-main capitalize">Contact Us</h1>
      <p className="text-[#6c757d] text-[16px] capitalize">
        You Can Contact Us Any Time You Need{" "}
      </p>
      <iframe
        className="w-full h-[390px] rounded-[5px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7455039.775340255!2d49.56762805475765!3d24.16625624451223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2z2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1659514550341!5m2!1sar!2seg"
      ></iframe>
      {/* START CONTACTS ROW */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 w-full">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2">
            <h3 className="text-main text-xl capitalize">Phone</h3>
            <p className="text-[#6c757d] text-[16px] capitalize">
              +91 1234567890
            </p>
          </div>
          <img src={phone} className="w-9 h-9" />
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2">
            <h3 className="text-main text-xl capitalize">Phone</h3>
            <p className="text-[#6c757d] text-[16px] capitalize">
              +91 1234567890
            </p>
          </div>
          <img src={phone} className="w-9 h-9" />
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2">
            <h3 className="text-main text-xl capitalize">Phone</h3>
            <p className="text-[#6c757d] text-[16px] capitalize">
              +91 1234567890
            </p>
          </div>
          <img src={phone} className="w-9 h-9" />
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default ContactUs;
