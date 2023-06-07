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

const Pizza = () => {
  const dispatch = useDispatch();
  const pizzaType = useSelector(pizzaTypeSelector);
  const pizzasData1 = useSelector(pizzasDataSelector);
  const sortedPizzas = useSelector(sortPizzaSelector);
  const cart = useSelector(addToCartSelector);
  console.log(cart, "cart");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(({ pizzas }) => {
        dispatch(setData(pizzas));
      });
  }, []);

  const handleAddingToCart = (item) => {
    // cart.map((elem) => {
    //   if(elem.id===item.id){
    //     dispatch(addToCart(item));
    //   }
    //   return elem
    // })

    //  for(let i = 0 ; i < cart.length; i++){
    //   if(cart[i].id!==item.id){
    //     dispatch(addToCart(item));
    //   }
    // }
    // console.log(item);
    dispatch(addToCart(item));
  };

  // thenable
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
          .map((item) => (
            <div
              className="bg-white flex justify-center items-center"
              key={item.id}
            >
              <div>
                <img
                  className="rounded-full w-[260px] h-[260px]"
                  src={item.src}
                  alt="no"
                />
                <p className="text-black text-center text-m font-extrabold">
                  {item.name}
                </p>
                <div className="bg-pizzaTypeColor cursor-pointer">
                  <div className="flex gap-[5px] justify-around font-bold items-center">
                    {PIZZAS_WEIGHTS.map(({ id, name }) => (
                      <p className="px-[13px] py-[6px]" key={id}>
                        {name}
                      </p>
                    ))}
                  </div>
                  <div className="flex gap-[10px] justify-around font-bold mb-[17px]">
                    <p>26 sm</p>
                    <p>30 sm</p>
                    <p>40 sm</p>
                  </div>
                </div>
                <div className="flex gap-[36px] justify-around">
                  <p className="text-l font-bold">от {item.price} ₽</p>
                  <div
                    onClick={() => handleAddingToCart(item)}
                    className="hover:bg-orange hover:text-white transition ease-in-out delay-100 cursor-pointer text-s font-bold text-lightOrange border rounded-[30px] pb-[8px] pt-[8px] px-[16px] border-lightOrange"
                  >
                    + Добавить
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Pizza;
