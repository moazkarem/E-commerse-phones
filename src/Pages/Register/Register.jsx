import React from "react";
import { signUp } from "../../data/formData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../helpers/validation";
import Errormsg from "../../Components/Error/Errormsg";
import { useDispatch, useSelector } from "react-redux";
import { postSignUp } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import Button from "../../Ui/Button";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.signUpRed);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  //============================HANDEL FIELDS LOOP ===========
  const renderFields = signUp?.map(({ name, type, icon, label }) => (
    <div key={name} className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6c757d] text-xl">
        {icon && React.createElement(icon)}
      </span>
      <input
        type={type}
        name={name}
        placeholder={label}
        {...register(name)}
        className="w-full border-b-2 border-[#6c757d] px-10 py-4 focus:outline-none bg-transparent text-white"
      />
      {errors[name] && <Errormsg msg={errors[name]?.message} />}
    </div>
  ));
  //============================HANDEL SUBMIT DATA ===========
  const onSubmit = (data) => {
    dispatch(postSignUp(data, navigate));
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#141414] px-4">
      <div className="bg-[#111] p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-center text-[20px] mb-6">Sign Up</h2>
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
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
