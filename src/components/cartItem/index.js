const CartItem = ({ name, src, price, removePizza }) => {
  return (
    <div className="flex justify-between items-center gap-[150px] pb-[61px]">
      <div className="flex justify-center items-center gap-[15px]">
        <img src={src} alt="no" className="w-[80px]" />
        <p className="text-l font-bold">{name}</p>
      </div>
      <div>
        <span>-</span>
        <span>0</span>
        <span>+</span>
      </div>
      <div>
        <p>{price}</p>
      </div>
      <div onClick={removePizza}>X</div>
    </div>
  );
};

export default CartItem;
