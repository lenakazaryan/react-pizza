import { PIZZAS_SAUCES } from "../../helpers/constants";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSauces, saucesSelector } from "../../redux/slices/pizzasSlice";

const Sauces = () => {
  const dispatch = useDispatch();
  const sauces = useSelector(saucesSelector);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(({ sauces }) => {
        dispatch(setSauces(sauces));
      });
  }, []);
  return (
    <div className="flex gap-4">
      {sauces.map(({ name, src, price }) => {
        return (
          <div className="p-[20px] flex flex-col justify-center items-center">
            <img
              className="w-[250px] h-[180px] rounded-[50%]"
              alt="no img"
              src={src}
            />
            <p className="font-bold mt-[20px]">{name}</p>
            <div className="flex justify-center items-center gap-4 text-l">
              <p className="font-bold">{price}</p>
              <div className="hover:bg-orange hover:text-white transition ease-in-out delay-100 cursor-pointer text-s font-bold text-lightOrange border rounded-[30px] pb-[8px] pt-[8px] px-[16px] border-lightOrange">
                + Добавить
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sauces;
