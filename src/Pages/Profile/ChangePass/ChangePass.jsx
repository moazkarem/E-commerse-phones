import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePass } from "../../../data/formData";
import Button from "../../../Ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePassSchema } from "../../../helpers/validation";
import Errormsg from "../../../Components/Error/Errormsg";
import { useDispatch, useSelector } from "react-redux";
import { changePassAction } from "../../../store/actions.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const ChangePass = () => {
  const storageKey = "userData";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const userId = userData?.data?.data?._id;
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const { loading } = useSelector((state) => state.authRed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePassSchema),
  });

  //============================HANDEL FIELDS LOOP ===========
  const renderFields = changePass?.map(
  ({ type, name, placeholder, classname }) => {
    let showPassword = false;
    let setShowPassword;

    if (name === "currentPassword") {
      showPassword = showCurrentPass;
      setShowPassword = setShowCurrentPass;
    } else if (name === "password") {
      showPassword = showNewPass;
      setShowPassword = setShowNewPass;
    } else if (name === "passwordConfirm") {
      showPassword = showConfirmPass;
      setShowPassword = setShowConfirmPass;
    }

    return (
      <div key={name} className={classname + " relative"}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          {...register(name)}
          className="w-full bg-transparent text-white focus:outline-none px-6 py-3 border border-[#6c757d] rounded-md pr-12"
        />
        <span
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        {errors[name] && (
          <p className="text-red-600 text-sm mt-2">{errors[name]?.message}</p>
        )}
      </div>
    );
  }
);


  //============================HANDEL SUBMIT DATA ===========
  const onSubmit = (data) => {
    console.log(data);
    dispatch(changePassAction({ userId, data, navigate }));
  };

  return (
    <form className="grid grid-cols-12 gap-4" onSubmit={handleSubmit(onSubmit)}>
      {renderFields}
      <Button
        loading={loading}
        style="w-[210px] bg-[rgba(255,0,0,0.8)] text-white py-3 rounded-md hover:bg-[#ff0000] transition flex justify-center items-center gap-2 col-span-12"
      >
        Change
      </Button>
    </form>
  );
};

export default ChangePass;
