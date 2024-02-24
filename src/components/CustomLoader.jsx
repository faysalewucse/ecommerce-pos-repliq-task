import { Oval } from "react-loader-spinner";

const CustomLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Oval color="indigo" secondaryColor="white" />
    </div>
  );
};

export default CustomLoader;
