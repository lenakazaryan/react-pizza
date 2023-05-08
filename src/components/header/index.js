import PizzaLogo from "../../assests/images/pizza_logo.png";
import ShoppingCart from "../../assests/images/shopping_cart.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
 bg-white
 container
 flex
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
  navigate("pizza");
}, []);
  return (
    <Container>
       <Link to="/pizza">
      <Logo>
        <img className="w-[38px] h-[38px]" src={PizzaLogo} alt="no" />
        <div>
          <h2 className="font-extrabold">REACT PIZZA</h2>
          <p className="text-s font-normal text-gray">
            Самая вкусная пицца в этой вселенной
          </p>
        </div>
      </Logo>
      </Link>
      <Cart>
        <div>520 ₽</div>
        <div className="text-line h-[25px]">|</div>
        <div className="hover:bg-line p-[10px] rounded-full">
        <Link to="/shoppingcart">
          <div>
            <img src={ShoppingCart} alt="no" />
          </div>
        </Link>
        </div>
      </Cart>
    </Container>
  );
};

export default Header;
