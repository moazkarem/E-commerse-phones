import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Ui/Button";
import { useForm } from "react-hook-form";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Errormsg from "../../Components/Error/Errormsg";
import { useDispatch, useSelector } from "react-redux";
import { postForgetPassword, postVerifiyCode } from "../../store/actions";
const Verifiy = () => {
  const { loading } = useSelector((state) => state.authRed);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //============================HANDEL SUBMIT DATA ===========
  const onSubmit = (data) => {
    console.log(data , 'from verifiy comp')
    dispatch(postVerifiyCode(data, navigate));
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#141414] px-4">
      <div className="bg-[#111] p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-center text-[20px] mb-6">Verification Code </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-8"
        >
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6c757d] text-xl">
              <MdOutlineMarkEmailRead />
            </span>
            <input
              type="text"
              placeholder="Enter Sended Code"
              name="resetCode"
              {...register("resetCode", { required: true })}
              className="w-full border-b-2 border-[#6c757d] px-10 py-4 focus:outline-none bg-transparent text-white"
            />
            {errors && <Errormsg msg={errors[name]?.message} />}
          </div>
          <Button
            loading={loading}
            style={
              "w-full bg-[rgba(255,0,0,0.8)] text-white py-3 rounded-md hover:bg-[#ff0000] transition flex justify-center items-center gap-2"
            }
          >
            Activate
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Verifiy;
