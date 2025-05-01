import React from "react";
import { Toaster } from "react-hot-toast";

const QuickeViewModal = ({ id, title, message, children }) => {
  return (
    <dialog id={id} className="modal z-40">

    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-[-1]"></div>
  
    <div className="modal-box bg-[#111] shadow-none w-[90%] rounded-[30px] max-w-full px-10 py-0 h-[90%]">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
  
      {title && (
        <h3 className="text-center text-[#ed1d24] text-lg">{title}</h3>
      )}
  
      {message && <p className="py-2">{message}</p>}
  
      <div className="py-2">{children}</div>
    </div>
  
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          background: "#000",
          color: "#fff",
          width: "300px",
          height: "60px",
          fontSize: "16px",
          borderRadius: "10px",
          padding: "15px",
          zIndex: 999999,
        },
        duration: 1500,
      }}
    />
  </dialog>
  
  );
};

export default QuickeViewModal;
