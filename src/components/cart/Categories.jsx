import { usePosContext } from "../../providers/ShopProvider";
import CategoryCard from "../cards/CategoryCard";
import { SlOptionsVertical } from "react-icons/sl";

const Categories = () => {
  const { categories } = usePosContext();

  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex gap-2">
        {categories.slice(0, 4).map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
      <SlOptionsVertical className="cursor-pointer text-2xl" />
    </div>
  );
};

export default Categories;