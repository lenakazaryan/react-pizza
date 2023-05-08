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
          className="cursor-pointer"
          key={item.id}
          onClick={() => sortPizzaPriceeeeeeeeeee(item)}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default Select;
