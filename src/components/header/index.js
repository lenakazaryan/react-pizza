import tw from "tailwind-styled-components";
// import PizzaLogo from "../assets/images/pizza_logo.png";
// import ShoppingCart from "../../assets/images/shopping_cart.svg";
import PizzaLogo from "../../assests/images/pizza_logo.png";
import ShoppingCart from "../../assests/images/shopping_cart.svg";

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
  return (
    <Container>
      <Logo>
        <img className="w-[38px] h-[38px]" src={PizzaLogo} alt="no" />
        <div>
          <h1 className="text-xl font-extrabold">REACT PIZZA</h1>
          <p className="text-s font-normal text-gray">
            Самая вкусная пицца в этой вселенной
          </p>
        </div>
      </Logo>
      <Cart>
        <div>520 ₽</div>
        <div className="text-line h-[25px]">|</div>
        <div>
          <img src={ShoppingCart} alt="no" />
        </div>
      </Cart>
    </Container>
  );
};

export default Header;
