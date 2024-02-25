import { PiUserCircleFill } from "react-icons/pi";
import { IoIosAddCircleOutline } from "react-icons/io";

const Customer = () => {
  return (
    <div className="my-3 bg-primaryBg p-2 rounded-md flex justify-between items-center">
      <div className="flex items-center gap-2">
        <PiUserCircleFill className="text-xl md:text-3xl text-primary" />
        <p className="text-primary  font-semibold md:text-lg text-sm">
          Customer Name
        </p>
      </div>
      <IoIosAddCircleOutline className="text-primary text-xl md:text-2xl" />
    </div>
  );
};

export default Customer;
