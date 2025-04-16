import React from "react";
import Modal from "../../../Ui/Modal";

const DeleteModal = () => {
  return (
    <div>
      <Modal
        id="delete_modal"
        title="Confirm Delete"
        message="Are you sure you want to delete this address?"
        actionLabel="Delete"
        actionClass="bg-red-600 text-white hover:bg-red-700"
      />
    </div>
  );
};

export default DeleteModal;
