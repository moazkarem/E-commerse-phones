import React from "react";

const Modal = ({ id, title, message, children }) => {
  return (
    <dialog id={id} className="modal ">
      <div
        className="modal-box bg-[#111] shadow-none
"
      >
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <h3 className=" text-center text-[#ed1d24] text-lg">{title}</h3>

        {message && <p className="py-2">{message}</p>}
        <div className="py-2">{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;
