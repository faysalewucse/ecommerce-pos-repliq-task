import IconButton from "../components/IconButton";
import { VscMenu } from "react-icons/vsc";
import { PiNotePencilLight } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbRefreshDot } from "react-icons/tb";
import { IoIosAddCircle } from "react-icons/io";

const CartNavbar = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex-1">
        <VscMenu className="text-3xl" />
      </div>
      <IconButton icon={<PiNotePencilLight />} label={"Note"} />
      <IconButton icon={<MdOutlineLocalShipping />} label={"Shipping"} />
      <IconButton icon={<TbRefreshDot />} label={"Hold Orders"} />
      <IconButton icon={<IoIosAddCircle />} label={"New Item"} />
    </div>
  );
};

export default CartNavbar;
