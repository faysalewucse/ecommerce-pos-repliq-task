import IconButton from "../components/IconButton";
import { VscMenu } from "react-icons/vsc";
import { PiNotePencilLight } from "react-icons/pi";
import { MdClose, MdOutlineLocalShipping } from "react-icons/md";
import { TbRefreshDot } from "react-icons/tb";
import { IoIosAddCircle } from "react-icons/io";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";

const CartNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex gap-2 items-center">
      <div className="">
        <VscMenu onClick={toggleDrawer} className="md:text-3xl" />
      </div>
      <IconButton icon={<PiNotePencilLight />} label={"Note"} />
      <IconButton icon={<MdOutlineLocalShipping />} label={"Shipping"} />
      <IconButton icon={<TbRefreshDot />} label={"Hold Orders"} />
      <IconButton icon={<IoIosAddCircle />} label={"New Item"} />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className=""
        size={300}
      >
        <div>
          <MdClose
            onClick={toggleDrawer}
            className="absolute right-5 top-5 text-2xl cursor-pointer"
          />
          <h1 className="text-center font-bold text-4xl text-sky-600 p-5">
            Repliq
          </h1>
        </div>
      </Drawer>
    </div>
  );
};

export default CartNavbar;
