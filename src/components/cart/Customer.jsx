import { PiUserCircleFill } from "react-icons/pi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CustomerForm from "../forms/CustomerForm";

const Customer = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="my-3 bg-primaryBg p-2 rounded-md flex justify-between items-center">
      <div className="flex items-center gap-2">
        <PiUserCircleFill className="text-xl md:text-3xl text-primary" />
        <p className="text-primary  font-semibold md:text-lg text-sm">
          Customer Name
        </p>
      </div>
      <IoIosAddCircleOutline
        onClick={onOpenModal}
        className="text-primary text-xl md:text-2xl"
      />
      <Modal
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <CustomerForm />
      </Modal>
    </div>
  );
};

export default Customer;
