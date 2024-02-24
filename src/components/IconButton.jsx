const IconButton = ({ icon, label }) => {
  return (
    <div className="cursor-pointer flex items-center text-primary py-2 px-4 font-semibold gap-2 bg-primaryBg hover:bg-primary rounded-md hover:text-white transition-300">
      <i className="text-2xl">{icon}</i> {label}
    </div>
  );
};

export default IconButton;
