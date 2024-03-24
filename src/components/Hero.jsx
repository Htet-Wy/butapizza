import { motion } from "framer-motion";
import hero from "../assets/home.png";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { scrollToSection } from "../features/scroll/scrollSlice";

const imgVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const heroVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 40,
    },
  },
};

const Hero = () => {
  const { isOpenModal } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  return (
    <div className="relative flex flex-col justify-center items-center gap-10 text-center mt-5 p-6 lg:flex-row lg:text-start">
      <motion.div
        className="max-w-[350px]"
        variants={imgVariant}
        initial="hidden"
        whileInView="visible"
      >
        <img src={hero} alt="hero image" className="object-cover" />
      </motion.div>
      <motion.div
        className="max-w-[550px] flex flex-col justify-center items-center lg:items-start"
        variants={heroVariant}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-cabin font-bold md:text-5xl">
          <span className="text-primary-yellow">Welcome</span> to the world of
          Tasty & Fresh Pizza
        </h1>
        <p className="my-5 md:my-8">
          Craving a slice of heaven? Look no further! Indulge in mouthwatering
          pizzas crafted with love at Buta Pizza. From savory classics to bold
          specialties, each bite is a journey of satisfaction. Order now and
          experience pizza perfection delivered right to your door. Life's too
          short for average pizza – treat yourself to extraordinary flavor
          today!"
        </p>
        <motion.button
          className="border border-primary-yellow rounded-full px-4 py-2 hover:bg-primary-yellow"
          whileTap={{ scale: 0.9 }}
          onClick={() => dispatch(scrollToSection("menu"))}
        >
          Choose a Pizza
        </motion.button>
      </motion.div>
      {isOpenModal && <Cart />}
    </div>
  );
};

export default Hero;
