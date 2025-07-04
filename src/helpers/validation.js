import * as yup from "yup";
export const signUpSchema = yup
  .object({
    name: yup
      .string()
      .required("User Name Require")
      .min(2, "username must be at lest 2 characters long"),
    email: yup
      .string()
      .required("Email is required")
      .matches(/^.+@.+\..+$/gi, "invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters "),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .matches(/^.+@.+\..+$/gi, "invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters "),
  })
  .required();

export const ResetSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .matches(/^.+@.+\..+$/gi, "invalid email address"),
    newPassword: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters "),
  })
  .required();

export const couponSchema = yup
  .object({
    couponName: yup.string().required("Coupon Name  is required"),
  })
  .required();

export const changePassSchema = yup
  .object({
    currentPassword: yup.string().required("Current password is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters "),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required();
