import { CiLock } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
export const signUp = [
  { type: "text", name: "name", label: "Username", icon: FaRegUser },
  {
    type: "email",
    name: "email",
    label: "Email",
    icon: MdOutlineMarkEmailRead,
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    icon: CiLock,
  },
  {
    type: "password",
    name: "passwordConfirm",
    label: "Confirm password",
    icon: CiLock,
  },
];
export const signIn = [
  {
    type: "email",
    name: "email",
    label: "Email",
    icon: MdOutlineMarkEmailRead,
  },
  { type: "password", name: "password", label: "Password", icon: CiLock },
];
