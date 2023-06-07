import { SAUCES } from "../../constants/routes";

import "./style.css";
import { NavLink } from "react-router-dom";

const SaucesDropdown = () => {
  return (
    <div className="sauces-container">
      <NavLink to={SAUCES}>
        <div>Sauces</div>
      </NavLink>
    </div>
  );
};

export default SaucesDropdown;
