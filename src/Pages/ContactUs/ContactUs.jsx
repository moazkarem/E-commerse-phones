// ContactUs.jsx
import { useForm } from "react-hook-form";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import BreadCrumb from "../../Components/BreadCrump/BreadCrump";
import Errormsg from "../../components/Error/ErrorMsg";
import toast from "react-hot-toast";
import Seo from "../../Components/Seo/Seo";
import { useDispatch } from "react-redux";
import { postContact } from "../../store/ContactUs/actions";
import { contactFields } from "./data";

const ContactUs = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //=========== render fields
  const renderContactFields = contactFields.map(
    ({ name, label, type, placeholder, isTextArea }, idx) =>
      isTextArea ? (
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay={idx * 100}
          key={idx}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-white text-[14px] mb-4">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              {...register("message", {
                required: "Message is required",
              })}
              className="min-h-[150px] w-full px-3 md:px-4 pl-10 md:pl-12 py-3 rounded-[8px] bg-[#222] text-white outline-none border border-[#444] text-[14px] md:text-[16px]"
            />
            {errors.message && (
              <Errormsg
                msg={errors.message.message}
                className="text-[#ed1d24]"
              />
            )}
          </div>
        </div>
      ) : (
        <div key={idx} className="flex flex-col gap-2">
          <label htmlFor={name} className="text-white text-[14px] mb-4">
            {label}
          </label>
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            {...register(name, { required: `${label} is required` })}
            className="w-full h-[45px] md:h-[55px] px-3 md:px-4 pl-10 md:pl-12 rounded-[8px] bg-[#222] text-white outline-none border border-[#444] text-[14px] md:text-[16px]"
          />
          {errors[name] && (
            <Errormsg msg={errors[name].message} className="text-[#ed1d24]" />
          )}
        </div>
      )
  );

  const onSubmit = (data) => {
    dispatch(postContact(data));
    reset();
  };

  return (
    <div className="pb-40 max-lg:pb-20">
      <Seo currentPage={"Contact Us"} />
      <div>
        <BreadCrumb base={"Home"} page={"Contact Us"} />
      </div>

      <div className="grid grid-cols-12 gap-5 mt-8 mb-16">
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay={100}
          className="col-span-12 sm:col-span-6 lg:col-span-4 md:col-span-6 bg-[#111] px-5 py-8 rounded-[10px] flex items-center gap-3"
        >
          <MdEmail className="text-[#ff0000cc] text-2xl" />
          <p className="text-white text-[15px]">contact@example.com</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay={200}
        className="col-span-12 sm:col-span-6 lg:col-span-4 md:col-span-6 bg-[#111] px-5 py-8 rounded-[10px] flex items-center gap-3">
          <MdLocationOn className="text-[#ff0000cc] text-2xl" />
          <p className="text-white text-[15px]">123 Main Street, City</p>
        </div>
        <div 
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay={300}
        className="col-span-12 sm:col-span-12 lg:col-span-4 md:col-span-12 bg-[#111] px-5 py-8 rounded-[10px] flex items-center gap-3">
          <MdPhone className="text-[#ff0000cc] text-2xl" />
          <p className="text-white text-[15px]">+20 123 456 789</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          {renderContactFields}

          <button
            type="submit"
            className="bg-[#ff0000cc] text-white py-3 px-6 rounded-[8px] mt-4 hover:bg-red-700 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Map */}
        <div className="w-full h-full">
          <iframe
            className="w-full h-full min-h-[400px] rounded-[10px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7455039.775340255!2d49.56762805475765!3d24.16625624451223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2z2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1659514550341!5m2!1sar!2seg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
