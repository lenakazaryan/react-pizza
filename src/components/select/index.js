import { sortPizzasArr } from "../../helpers/constants";
import { useDispatch } from "react-redux";
import { sortPizzaPrice } from "../../redux/slices/pizzasSlice";

const Select = () => {
  const dispatch = useDispatch();

  const sortPizzaPriceeeeeeeeeee = (item) => {
    dispatch(sortPizzaPrice(item.sortItem));
  };

  return (
    <div className="absolute top-[20px] left-0 font-xs font-bold w-[130px] bg-lightGray mt-[3px] p-[15px]">
      {sortPizzasArr.map((item) => (
        <p
          key={item.id}
          className="cursor-pointer"
          onClick={() => sortPizzaPriceeeeeeeeeee(item)}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default Select;
