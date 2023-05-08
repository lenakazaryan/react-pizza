import { filtredTypes } from "../../helpers/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleSelect,
  selectIsOpenSelector,
  setPizzaType,
  setIsActive,
  menuSelector,
} from "../../redux/slices/pizzasSlice";

import tw from "tailwind-styled-components";
import Arrow from "../../assests/images/arrow_select.svg";
import Select from "../select";
import "./style.css";

const Container = tw.div`
 flex
 flex-row
 justify-between
 items-center
 container
 gap-[8px]
`;

const MenuItem = tw.li`
bg-lightGray
  pt-[13px]
  cursor-pointer
  pb-[16px]
  pl-[25px]
  pr-[25px]
  rounded-[30px]
  block
  font-s
  font-bold
`;


const Menu = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectIsOpenSelector);
  const menuActive = useSelector(menuSelector);

  const toggleDropdown = e => {
    dispatch(toggleSelect(e.target.name));
  };

  const filterPizzaTypes = e => {
    const { id, type } = e.target;

    dispatch(setPizzaType(type));
    dispatch(setIsActive(id));
  };

  return (
    <Container>
      <div className="flex gap-[40px] ">
        {filtredTypes.map(({ id, type, price, name}) => (
          <MenuItem
            id={id}
            key={id}
            type={type}
            price={price}
            onClick={filterPizzaTypes}
            className={menuActive === id.toString() ? "active" : ""}
          >
            {name}
          </MenuItem>
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
            className="cursor-pointer font-bold font-xs mr-[50px]"
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
