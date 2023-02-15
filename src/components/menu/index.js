import { filtredTypes } from "../../helpers/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleSelect,
  selectIsOpenSelector,
  setPizzaType,
} from "../../redux/slices/pizzasSlice";

import tw from "tailwind-styled-components";
import Arrow from "../../assests/images/arrow_select.svg";
import Select from "../select";

const Container = tw.div`
 flex
 flex-row
 justify-between
 items-center
 container
 gap-[8px]
`;

// const Nav = tw.div`
//  flex
//  list-none
//  justify-between
//  gap-[50px]
// `;

const Menu = () => {
  const open = useSelector(selectIsOpenSelector);
  const dispatch = useDispatch();

  const toggleDropdown = (e) => {
    dispatch(toggleSelect(e.target.name));
  };

  const filterPizzaTypes = (e) => {
    dispatch(setPizzaType(e.target.type));
    console.log(dispatch(setPizzaType(e.target.type)), "p");
  };

  return (
    <Container>
      <div className="flex gap-[40px]">
        {filtredTypes.map((item) => (
          <li
            key={item.id}
            price={item.price}
            type={item.type}
            onClick={filterPizzaTypes}
            className="bg-lightGray pt-[13px] cursor-pointer pb-[16px] pl-[25px] pr-[25px] rounded-[30px] block font-s font-bold"
          >
            {item.name}
          </li>
        ))}
      </div>
      <div className="flex gap-[10px]">
        <div className="flex gap-[7px] ">
          <img className={`${open ? "arrow-move" : ""}`} src={Arrow} alt="no" />
          <span className="font-xs font-bold">Сортировка по:</span>
        </div>
        <div className="select flex flex-col relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer font-bold font-xs"
          >
            pop
          </div>
          {open && <Select />}
        </div>
      </div>
    </Container>
  );
};

export default Menu;
