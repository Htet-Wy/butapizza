import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { closeModal } from "../features/modal/modalSlice";
import { clearItems } from "../features/menu/menuSlice";
import { AnimatePresence, motion } from "framer-motion";

const cartVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const Cart = () => {
  const { cartItems, amount, total } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  return (
    <motion.div
      className="fixed top-20 left-30 bg-primary-yellow w-[350px] rounded-lg z-20 px-4 py-6"
      variants={cartVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <p>Your Cart</p>
          <div className="bg-primary-red px-2 rounded-full">{amount}</div>
        </div>
        <button
          className="text-2xl hover:scale-110 transition duration-500 text-primary-red"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <MdClose />
        </button>
      </div>
      {cartItems.length === 0 && (
        <h1 className="text-center">Sorry!!! You have no products here.</h1>
      )}
      <div className="flex flex-col items-center gap-4 w-full h-[300px] overflow-y-auto">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            amount={item.amount}
          />
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="flex flex-col justify-center items-center gap-4 mt-6">
          <div className="flex justify-between items-center w-full">
            <p>Total</p>
            <span>$ {total}</span>
          </div>
          <motion.button
            className="border border-primary-red hover:bg-primary-red px-4 py-2 rounded-full w-full"
            onClick={() => {
              dispatch(clearItems());
            }}
            whileTap={{ scale: 0.8 }}
          >
            Check Out
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
