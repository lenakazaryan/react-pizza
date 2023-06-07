import {useState} from "react";
import {useDispatch} from "react-redux";

import {COEFFICIENTS, PIZZAS_SIZES, PIZZAS_TYPES} from "../../constants/pizzas";
import {addPizza} from "../../redux/slices/pizzasSlice";

const {THIN, TRADITIONAL} = PIZZAS_TYPES
const {SMALL, MEDIUM, LARGE} = PIZZAS_SIZES

const SinglePizzaCard = ({id, src, name, price}) => {
  const dispatch = useDispatch();

  const [type, setType] = useState(THIN.id);
  const [size, setSize] = useState(MEDIUM);

  const handleAddingToCart = (item) => {
    dispatch(addPizza(item));
  };

  return (
    <div
      className="bg-white flex justify-center items-center"
      key={id}
    >
      <div>
        <img
          className="rounded-full w-[260px] h-[260px]"
          src={src}
          alt="no"
        />
        <p className="text-black text-center text-m font-extrabold">
          {name}
        </p>
        <div className="bg-pizzaTypeColor cursor-pointer">
          <div className="flex gap-[5px] justify-around font-bold items-center">
            {Object.keys(PIZZAS_TYPES).map(key => (
              <p onClick={() => setType(PIZZAS_TYPES[key].id)} className="px-[13px] py-[6px]" key={PIZZAS_TYPES[key].id}>
                {PIZZAS_TYPES[key].name}
              </p>
            ))}
          </div>
          <div className="flex gap-[10px] justify-around font-bold mb-[17px]">
            <p onClick={() => setSize(SMALL)}>26 sm</p>
            <p onClick={() => setSize(MEDIUM)}>30 sm</p>
            <p onClick={() => setSize(LARGE)}>40 sm</p>
          </div>
        </div>
        <div className="flex gap-[36px] justify-around">
          <p className="text-l font-bold">от {price} ₽</p>
          <div
            onClick={() => handleAddingToCart({ id, size, type, price: price * COEFFICIENTS[size] * COEFFICIENTS[type]})}
            className="hover:bg-orange hover:text-white transition ease-in-out delay-100 cursor-pointer text-s font-bold text-lightOrange border rounded-[30px] pb-[8px] pt-[8px] px-[16px] border-lightOrange"
          >
            + Добавить
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePizzaCard
