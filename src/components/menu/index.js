import { useSelector, useDispatch } from "react-redux";
import { FILTERED_TYPES } from "../../helpers/constants";

import {
  toggleSelect,
  selectIsOpenSelector,
  setPizzaType,
  setIsActive,
  menuSelector,
} from "../../redux/slices/pizzasSlice";

import tw from "tailwind-styled-components";
import Arrow from "../../assets/images/arrow_select.svg";
import Select from "../Select";

import "./style.css";

const Container = tw.div`
 flex
 flex-row
 container
 gap-[8px]
 items-center
 justify-between
`;

const MenuItem = tw.li`
  block
  font-s
  font-bold
  pt-[13px]
  pb-[16px]
  pl-[25px]
  pr-[25px]
  bg-lightGray
  cursor-pointer
  rounded-[30px]
`;

const Menu = () => {
  const dispatch = useDispatch();
  const menuActive = useSelector(menuSelector);
  const isOpen = useSelector(selectIsOpenSelector);

  const toggleDropdown = (e) => {
    dispatch(toggleSelect(e.target.name));
  };

  const filterPizzaTypes = (e) => {
    dispatch(setIsActive(e.target.id));
    dispatch(setPizzaType(e.target.type));
  };

  return (
    <Container>
      <div className="flex gap-[40px] ">
        {FILTERED_TYPES.map(({ id, price, type, name }) => (
          <MenuItem
            id={id}
            key={id}
            price={price}
            type={type}
            onClick={filterPizzaTypes}
            className={menuActive === id.toString() ? "active" : ""}
          >
            {name}
          </MenuItem>
        ))}
      </div>
      <div className="flex gap-[10px]">
        <div className="flex gap-[7px] ">
          <img
            className={`${isOpen ? "arrow-move" : ""}`}
            src={Arrow}
            alt="no"
          />
          <span className="font-xs font-bold">Сортировка по:</span>
        </div>
        <div className="select flex flex-col relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer font-bold font-xs mr-[50px]"
          >
            pop
          </div>
          {isOpen && <Select />}
        </div>
      </div>
    </Container>
  );
};

export default Menu;
