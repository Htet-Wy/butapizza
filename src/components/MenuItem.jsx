import { useDispatch } from "react-redux";
import { addtoCart } from "../features/menu/menuSlice";
import { motion } from "framer-motion";

const MenuItem = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();

  return (
    <article className="flex flex-col items-center text-center gap-6 md:flex-row md:text-start">
      <motion.img
        src={image}
        alt="pizza image"
        width={250}
        height={250}
        className="cursor-pointer"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 15 }}
        transition={{ duration: 1 }}
      />
      <div className="w-[300px]">
        <h4 className="text-2xl text-primary-yellow font-bold mb-2">{name}</h4>
        <p className="text-gray-400 text-[14px]">{description}</p>
        <div className="flex items-center justify-between mt-6">
          <p className="text-primary-red font-bold">${price}</p>
          <motion.button
            className="bg-primary-yellow px-4 py-2 rounded-full"
            onClick={() => {
              dispatch(addtoCart(id));
            }}
            whileTap={{ scale: 0.8 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
