import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartTotal } = useContext(ShopContext);
  return (
    <div className="w-full ">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-3 mt-5 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartTotal()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>
            {currency}
            {delivery_fee}.00

          </p>
        </div>
        <hr />
        <div className="flex justify-between font-bold">
          <b>Total</b>
          <b>
            {currency}
            {getCartTotal() === 0 ? 0 : getCartTotal() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
