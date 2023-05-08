import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import Cart from "../../assests/images/cart.svg";
import Remove from "../../assests/images/remove.svg";
import ArrowBack from "../../assests/images/arrow_back.svg";
import { useSelector, useDispatch } from "react-redux";
import { addToCartSelector } from "../../redux/slices/pizzasSlice";
import CartItem from "../cartItem";
import CartIsEmpty from "../cartIsEmpty.js";
import { removeFromCart } from "../../redux/slices/pizzasSlice";

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

  const cartData = useSelector(addToCartSelector);

  return (
    <Container>
      <Content>
        <header
          style={!cartData.length ? { display: "none" } : { display: "flex" }}
          className="flex justify-between items-center pb-[61px]"
        >
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
        {!cartData.length ? (
          <CartIsEmpty />
        ) : (
          cartData.map((item) => (
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
          <Link to="/pizza">
            <ButtonGoPrev>
              <img className="arrow" src={ArrowBack} alt="no" />
              <span>Вернуться назад</span>
            </ButtonGoPrev>
          </Link>
          <ButtonPay>Оплатить сейчас</ButtonPay>
        </footer>
      </Content>
    </Container>
  );
};

export default ShoppingCart;
