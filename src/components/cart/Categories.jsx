import { usePosContext } from "../../providers/ShopProvider";
import CategoryCard from "../cards/CategoryCard";
import { SlOptionsVertical } from "react-icons/sl";

const Categories = ({ openDrawer }) => {
  const { categories } = usePosContext();

  return (
    <div className="my-3 flex gap-2 items-center justify-between">
      <div className="flex gap-2">
        {categories.slice(0, 3).map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
      <SlOptionsVertical
        onClick={openDrawer}
        className="cursor-pointer text-2xl"
      />
    </div>
  );
};

export default Categories;
