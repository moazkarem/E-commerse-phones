import React from "react";
import {  useNavigate } from "react-router-dom";
import { resetPassword } from "../../data/formData";
import Button from "../../Ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetSchema } from "../../helpers/validation";
import Errormsg from "../../Components/Error/Errormsg";
import { useDispatch, useSelector } from "react-redux";
import { postResetPassword } from "../../store/actions";
import Seo from "../../Components/Seo/Seo";
const ResetPassword = () => {
  const { loading } = useSelector((state) => state.authRed);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ResetSchema),
  });
  //============================HANDEL FIELDS LOOP ===========
  const renderFields = resetPassword?.map(({ name, icon, label, type }) => (
    <div key={name} className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6c757d] text-xl">
        {icon && React.createElement(icon)}
      </span>
      <input
        type={type}
        placeholder={label}
        name={name}
        {...register(name)}
        className="w-full border-b-2 border-[#6c757d] px-10 py-4 focus:outline-none bg-transparent text-white"
      />
      {errors && <Errormsg msg={errors[name]?.message} />}
    </div>
  ));
  //============================HANDEL SUBMIT DATA ===========
  const onSubmit = (data) => {
    console.log(data , 'reset form')
    dispatch(postResetPassword(data, navigate));
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#141414] px-4">
          <Seo currentPage={'Reset Password'}/>
      <div className="bg-[#111] p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-center text-[20px] mb-6">Reset Password</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-8"
        >
          {renderFields}
          <Button
            loading={loading}
            style={
              "w-full bg-[rgba(255,0,0,0.8)] text-white py-3 rounded-md hover:bg-[#ff0000] transition flex justify-center items-center gap-2"
            }
          >
            Confirm
          </Button>
        </form>

       
      </div>
    </div>
  );
};

export default ResetPassword;
