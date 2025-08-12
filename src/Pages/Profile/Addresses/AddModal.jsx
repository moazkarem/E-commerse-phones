import React from "react";
import Modal from "../../../Ui/Modal";
import { editAddressForm } from "../../../data/formData";
import { useForm } from "react-hook-form";
import { addAddressAction } from "../../../store/actions";
import { useDispatch } from "react-redux";
const AddModal = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data, "from add modal comp");
    dispatch(addAddressAction(data));
    document.getElementById("add_modal").close();
  };

  return (
    <div>
      <Modal id="add_modal" title="Add New Address">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-12 gap-3">
            {editAddressForm?.map((field, idx) => (
              <div key={idx} className={`col-span-12 mt-2`}>
                <label htmlFor={field.id} className="text-sm">
                  {field.label}:
                </label>

                {field.isTextarea ? (
                  <textarea
                    id={idx}
                    placeholder={field.placeholder}
                    className="mt-2 w-full border rounded-md border-[rgb(108,117,125)] px-3 py-3 h-24 focus:outline-none bg-transparent text-white"
                    {...register(field.name, {
                      required: `${field.label} is required`,
                    })}
                  />
                ) : (
                  <input
                    id={idx}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="mt-2 w-full border rounded-md border-[#6c757d] px-3 py-3 focus:outline-none bg-transparent text-white"
                    {...register(field.name, {
                      required: `${field.label} is required`,
                    })}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex space-x-2 mt-10">
            <button
              onClick={() => document.getElementById("add_modal").close()}
              className="w-1/2 py-2 border border-[#454a4d] rounded-[10px]"
            >
              Cancel
            </button>
            <button
              className="w-1/2 py-2 rounded-[10px] bg-[#ff0000cc] text-[16px] font-light text-white"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddModal;
