import { usePosContext } from "../../providers/ShopProvider";

const CategoryCard = ({ category }) => {
  const { selectedCategory, setSelectedCategory, filterProductsByCategory } =
    usePosContext();

  return (
    <div
      onClick={() => {
        setSelectedCategory(category);
        filterProductsByCategory(category);
      }}
      className={`${
        selectedCategory === category
          ? "border-primary bg-secondaryBg text-secondary"
          : "border-greyBg text-gray-500"
      } cursor-pointer border-2   font-semibold px-4 py-1 flex items-center justify-center rounded-md capitalize`}
    >
      {category}
    </div>
  );
};

export default CategoryCard;
