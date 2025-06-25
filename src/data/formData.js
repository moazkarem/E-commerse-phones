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

export const resetPassword = [
  {
    type: "email",
    name: "email",
    label: "Email",
    icon: MdOutlineMarkEmailRead,
  },
  {
    type: "password",
    name: "newPassword",
    label: "New Password",
    icon: CiLock,
  },
];

export const editAddressForm = [
  {
    id: "address",
    label: "Address",
    placeholder: "Enter new address",
    name: "alias",
    type: "text",
    col: 12,
    isTextarea: false,
  },
  {
    id: "details",
    label: "Details",
    placeholder: "Enter phone number",
    name: "details",
    type: "text",
    col: 12,
    isTextarea: true,
  },
  {
    id: "city",
    label: "City",
    placeholder: "Enter city",
    name: "city",
    type: "text",
    col: 6,
    isTextarea: false,
  },
  {
    id: "postal_code",
    label: "Postal Code",
    placeholder: "Enter postal code",
    name: "postalCode",
    type: "text",
    col: 6,
    isTextarea: false,
  },
  {
    id: "phone",
    label: "Phone",
    placeholder: "Enter phone number",
    name: "phone",
    type: "text",
    col: 12,
    isTextarea: false,
  },
];

export const changePass = [
  {
    type: "password",
    name: "currentPassword",
    placeholder: "Enter Current Password",
    classname:
      "col-span-12 w-full ",
  },

  {
    type: "password",
    name: "password",
    placeholder: "Enter New Password",
    classname:
      " col-span-12 md:col-span-12 lg:col-span-6 w-full ",
  },

  {
    type: "password",
    name: "passwordConfirm",
    placeholder: "New Password Confirmation",
    classname:
      "col-span-12 md:col-span-12 lg:col-span-6   w-full ",
  },
];
