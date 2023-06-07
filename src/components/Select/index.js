import { useDispatch } from "react-redux";

import { SORT_PIZZAS } from "../../helpers/constants";

import { sortPizzaPrice } from "../../redux/slices/pizzasSlice";

const Select = () => {
  const dispatch = useDispatch();

  const handleSortingPizzas = (item) => {
    dispatch(sortPizzaPrice(item.sortItem));
  };

  return (
    <div className="absolute top-[20px] left-0 font-xs font-bold w-[130px] bg-lightGray mt-[3px] p-[15px]">
      {SORT_PIZZAS.map(({ name, id, ...rest }) => (
        <p
          className="cursor-pointer"
          key={id}
          onClick={() => handleSortingPizzas({ name, ...rest })}
        >
          {name}
        </p>
      ))}
    </div>
  );
};

export default Select;
