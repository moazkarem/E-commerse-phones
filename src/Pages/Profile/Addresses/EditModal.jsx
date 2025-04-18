import React, { useEffect, useState } from "react";
import Modal from "../../../Ui/Modal";
import { editAddressForm } from "../../../data/formData";
import { useForm } from "react-hook-form";
import Errormsg from "../../../Components/Error/Errormsg";
import { useDispatch } from "react-redux";
import { editAddressAction } from "../../../store/actions";
const EditModal = ({ address }) => {
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAdddress] = useState(null);
  useEffect(() => {
    if (address?._id) {
      setSelectedAdddress(address._id);
    } else {
      const sortedId = localStorage.getItem("currentAddressId");
      if (sortedId) {
        setSelectedAdddress(sortedId);
      }
    }
  }, [address]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(editAddressAction(data, selectedAddress));
    document.getElementById("edit_modal").close();
  };
  return (
    <div>
      <Modal id="edit_modal" title="Edit Address">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-12 gap-3">
            {editAddressForm?.map((field, idx) => (
              <div key={idx} className={`col-span-${field.col} mt-2`}>
                <label htmlFor={field.id} className="text-sm">
                  {field.label}:
                </label>

                {field.isTextarea ? (
                  <textarea
                    id={idx}
                    placeholder={field.placeholder}
                    className="mt-2 w-full border rounded-md border-[rgb(108,117,125)] px-3 py-3 h-24 focus:outline-none bg-transparent text-white"
                    defaultValue={address ? address[field.name] : ""}
                    {...(address
                      ? {
                          ...register(field.name, {
                            required: `${field.label} is required`,
                          }),
                        }
                      : null)}
                  />
                ) : (
                  <input
                    id={idx}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-2 w-full border rounded-md border-[#6c757d] px-3 py-3 focus:outline-none bg-transparent text-white"
                    defaultValue={address ? address[field.name] : ""}
                    {...(address
                      ? {
                          ...register(field.name, {
                            required: `${field.label} is required`,
                          }),
                        }
                      : null)}
                  />
                )}
                {errors[field.name] && (
                  <Errormsg msg={errors[field.name].message} />
                )}
              </div>
            ))}
          </div>

          <div className="flex space-x-2 mt-10">
            <button
              onClick={() => document.getElementById("edit_modal").close()}
              className="w-1/2 py-2 border border-[#454a4d] rounded-[10px]"
            >
              Cancel
            </button>
            <button
              className="w-1/2 py-2 rounded-[10px] bg-[#ff0000cc] text-[16px] font-light text-white"
              type="submit"
            >
              Edit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditModal;
