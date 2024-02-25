const IconButton = ({ icon, label, labelColor, bgColor, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex-1 justify-center cursor-pointer flex items-center ${
        labelColor ? labelColor : "text-primary"
      } md:py-2 md:px-4 p-2 font-semibold gap-2 ${
        bgColor ? bgColor : "bg-primaryBg"
      } hover:bg-primary rounded-md hover:text-white md:text-lg text-xs transition-300`}
    >
      <i className="md:text-2xl text-lg">{icon}</i> {label}
    </div>
  );
};

export default IconButton;
