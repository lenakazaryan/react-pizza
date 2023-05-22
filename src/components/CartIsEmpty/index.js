import EmptyCart from "../../assets/images/empty_cart.svg";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const Button = tw.button`
bg-buttonBg
text-white
rounded-[30px]
px-[30px]
py-[12px]
font-bold
font-s
mb-[40px]
`;

const CartIsEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl pb-[10px] font-bold">Корзина Пустая</p>
      <p className="text-s text-gray">
        Вероятней всего, вы не заказывали ещё пиццу.
      </p>
      <p className="pb-[47px] text-gray">
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img className="w-[300px] pb-[20px]" src={EmptyCart} alt="no" />
      <Link to="/pizza">
      <Button>Вернуться назад</Button>
      </Link>
    </div>
  );
};

export default CartIsEmpty;
