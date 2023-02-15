import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  pizzasDataSelector,
  setData,
  pizzaTypeSelector,
  sortPizzaSelector,
} from "../../redux/slices/pizzasSlice";

const Pizza = () => {
  const pizzasData1 = useSelector(pizzasDataSelector);
  const pizzaType = useSelector(pizzaTypeSelector);
  const sortedPizzas = useSelector(sortPizzaSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setData(data.pizzas));
      });
  }, []);

  return (
    <div className="gap grid grid-cols-4 gap-[70px] justify-center items-center container mt-[70px] pb-[96px]">
      {pizzasData1
        .filter((item) =>
          pizzaType === "all" ? true : item.type === pizzaType
        )
        .sort((a, b) => (sortedPizzas === "pocene" ? a.price - b.price : ""))
        .map((item) => {
          return (
            <div
              className="bg-white flex justify-center items-center "
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
                    <p className="px-[13px] py-[6px]">тонкое</p>
                    <p>традиционное</p>
                  </div>
                  <div className="flex gap-[10px] justify-around font-bold mb-[17px]">
                    <p>26 sm</p>
                    <p>30 sm</p>
                    <p>40 sm</p>
                  </div>
                </div>
                <div className="flex gap-[36px] justify-around">
                  <p className="text-l font-bold">от {item.price} ₽</p>
                  <div className="text-s font-bold text-lightOrange border rounded-[30px] pb-[8px] pt-[8px] px-[16px] border-lightOrange">
                    + Добавить
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Pizza;
