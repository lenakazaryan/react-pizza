import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setData,
  addToCart,
  pizzasDataSelector,
  pizzaTypeSelector,
  sortPizzaSelector,
  addToCartSelector,
} from "../../redux/slices/pizzasSlice";

import Menu from "../Menu";
import { PIZZAS_WEIGHTS } from "../../helpers/constants";
import SinglePizzaCard from "../SinglePizzaCard";

const Pizza = () => {
  const dispatch = useDispatch();
  const pizzaType = useSelector(pizzaTypeSelector);
  const pizzasData1 = useSelector(pizzasDataSelector);
  const sortedPizzas = useSelector(sortPizzaSelector);
  const cart = useSelector(addToCartSelector);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(({ pizzas }) => {
        dispatch(setData(pizzas));
      });
  }, []);


  return (
    <>
      <Menu />
      <div className="gap grid grid-cols-4 gap-[70px] justify-center items-center container mt-[70px] pb-[96px]">
        {pizzasData1
          .filter((item) => pizzaType === "all" || item.type === pizzaType)
          .sort((a, b) =>
            sortedPizzas === "byPrice"
              ? a.price - b.price
              : a.name < b.name
              ? -1
              : 1
          )
          .map(({ id, src, name, price}) => (
            <SinglePizzaCard id={id} src={src} name={name} price={price} />
          ))}
      </div>
    </>
  );
};

export default Pizza;
