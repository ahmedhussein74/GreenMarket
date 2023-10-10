import paypal from '../images/paypal.webp'
import mastercard from '../images/mastercard.webp'
import visa from '../images/visa.png'
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, decreaseFromCart } from "../app/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const quantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return (
    <section className="min-h-screen pt-[60px]">
      <h2 className="text-center text-[25px] md:text-[30px] font-bold py-[20px]">
        Shopping Cart
      </h2>
      {cartItems.length > 0 ? (
        <>
          <div className="w-[90%] md:w-[600px] mx-auto flex flex-col gap-[30px]">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-[15px] rounded-lg shadow-lg p-[20px] bg-stone-50"
              >
                <img
                  src={item.image_url}
                  className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                />
                <article className="w-[75%] flex flex-col gap-[5px]">
                  <h2 className="flex justify-between w-full">
                    <span className="font-bold text-[18px]">{item.name}</span>
                    <i
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="fa-solid fa-trash text-red-600 text-[20px] cursor-pointer"
                    ></i>
                  </h2>
                  <p>{item.price} $</p>
                  <p className="flex items-center gap-[15px]">
                    <i
                      onClick={() => dispatch(decreaseFromCart(item.id))}
                      className="fa-solid fa-minus text-red-600 cursor-pointer"
                    ></i>
                    <span className="flex items-center justify-center border border-1 w-[40px] h-[30px] rounded block">
                      {item.quantity}
                    </span>
                    <i
                      onClick={() => dispatch(addToCart(item))}
                      className="fa-solid fa-plus text-blue-600 cursor-pointer"
                    ></i>
                  </p>
                  <p>Total: {item.quantity * item.price}$</p>
                </article>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[10px] items-center my-5 w-[90%] md:w-[350px] mx-auto text-[18px]">
            <h2 className="font-bold">Receipt</h2>
            <h2 className="flex justify-between w-full">
              <span>Products Quantity</span> <span>{quantity}</span>
            </h2>
            <h2 className="flex justify-between w-full">
              <span>Total</span> <span>{total}$</span>
            </h2>
            <button className="w-full h-[40px] bg-green-600 text-white rounded mt-[20px]">
              CHECKOUT
            </button>
            <div className='w-full flex justify-between'>
              <img src={paypal} className="w-[80px] h-[50px]" />
              <img src={mastercard} className="w-[80px] h-[50px]" />
              <img src={visa} className="w-[80px] h-[50px]" />
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Cart;
