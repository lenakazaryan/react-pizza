import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Cart from "../../assets/images/cart.svg";
import Remove from "../../assets/images/remove.svg";
import ArrowBack from "../../assets/images/arrow_back.svg";

import CartItem from "../CartItem";
import CartIsEmpty from "../CartIsEmpty/index.js";
import { removeFromCart } from "../../redux/slices/pizzasSlice";
import { addToCartSelector, addToCartSelector2 } from "../../redux/slices/pizzasSlice";
import { PIZZAS_ROUTE } from "../../constants/routes";

import tw from "tailwind-styled-components";

const Container = tw.div`
 container
 flex
 justify-center
 items-center
 w-full
`;

const Content = tw.div`
 
`;

const ButtonPay = tw.button`
bg-orange
rounded-[30px]
px-[20px]
py-[12px]
text-white

`;

const ButtonGoPrev = tw.button`
 border
 border-borderGray
 rounded-[30px]
 text-borderGray
 px-[15px]
 py-[10px]
 flex
 items-center
 justify-center
 gap-[15px]
 hover:bg-orange
 hover:text-white
`;

const ShoppingCart = () => {
  const dispatch = useDispatch();

  // const removePizza = (item) => {
  //   console.log(item.id);
  //   dispatch(removeFromCart(item.id));
  // };

  const cartData = useSelector(addToCartSelector2);
  const cardKeys = Object.keys(cartData)

  return (
    <Container>
      <Content>
        {!cardKeys.length && (
          <header className="flex justify-between items-center pb-[61px]">
            <div>
              <div className="flex items-center justify-center gap-[12px]">
                <img src={Cart} alt="no" />
                <p className="text-2xl font-bold">Корзина</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[7px]">
              <img src={Remove} alt="no" />
              <p>Очистка корзины</p>
            </div>
          </header>
        )}
        {!cardKeys.length ? (
          <CartIsEmpty />
        ) : (
          cardKeys.map((item) => (
            <CartItem
              removePizza={() => dispatch(removeFromCart(item.id))}
              name={item.name}
              src={item.src}
              price={item.price}
            />
          ))
        )}
        <footer
          style={!cartData.length ? { display: "none" } : { display: "flex" }}
          className="flex justify-between pb-[131px]"
        >
          <NavLink to={PIZZAS_ROUTE}>
            <ButtonGoPrev>
              <img className="arrow" src={ArrowBack} alt="no" />
              <span>Вернуться назад</span>
            </ButtonGoPrev>
          </NavLink>
          <ButtonPay>Оплатить сейчас</ButtonPay>
        </footer>
      </Content>
    </Container>
  );
};

export default ShoppingCart;
