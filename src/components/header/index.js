import { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import pizzaLogo from "../../assets/images/pizza_logo.png";
import ShoppingCart from "../../assets/images/shopping_cart.svg";

import { PIZZAS_ROUTE, SHOPPING_CART } from "../../constants/routes";

import tw from "tailwind-styled-components";

const Container = tw.div`
 bg-white
 container
 flex
 justify-between
 items-center
 mb-[86px]
 pt-[54px]
`;

const Logo = tw.div`
  flex
 bg-white
 container
 gap-[17px]
 text-start
 items-center
`;

const Cart = tw.div`
 bg-orange
 w-[150px]
 flex
 gap-[13px]
 h-[50px]
 justify-center
 items-center
 rounded-[30px]
 text-white
 font-s
 font-bold
`;

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(PIZZAS_ROUTE);
  }, []);

  return (
    <Container>
      <NavLink to={PIZZAS_ROUTE}>
        <Logo>
          <img className="w-[38px] h-[38px]" src={pizzaLogo} alt="no" />
          <div>
            <h2 className="font-extrabold text-black">REACT PIZZA</h2>
            <p className="text-s font-normal text-gray">
              Самая вкусная пицца в этой вселенной
            </p>
          </div>
        </Logo>
      </NavLink>
      <Cart>
        <div>520 ₽</div>
        <div className="text-line h-[25px]">|</div>
        <div className="hover:bg-line p-[10px] rounded-full">
          <NavLink to={SHOPPING_CART}>
            <div>
              <img src={ShoppingCart} alt="no" />
            </div>
          </NavLink>
        </div>
      </Cart>
    </Container>
  );
};

export default Header;
