import {
  MdLocationPin,
  MdLocalPhone,
  MdShoppingCart,
  MdClose,
} from "react-icons/md";
import { LuClock8 } from "react-icons/lu";
import { RiMenu3Line } from "react-icons/ri";
import logo from "../assets/pizza.png";
import { useDispatch, useSelector } from "react-redux";
import { openNav, closeNav } from "../features/navbar/navSlice";
import { motion } from "framer-motion";
import { openModal } from "../features/modal/modalSlice";
import { scrollToSection } from "../features/scroll/scrollSlice";

const navVariant = {
  hidden: {
    x: 500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const navListVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const navItemVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Header = () => {
  const dispatch = useDispatch();
  const { isOpenNav } = useSelector((state) => state.navbar);
  const { isOpenModal } = useSelector((state) => state.modal);
  const { cartItems } = useSelector((state) => state.menu);

  return (
    <header>
      <div className="hidden justify-between items-center border-b border-b-white p-4 md:flex xl:px-0">
        <div className="flex flex-col gap-4 items-start md:flex-row">
          <div className="flex items-center gap-2">
            <MdLocationPin className="text-primary-yellow text-xl" />
            <p>YOUR COUNTRY,YOUR CITY, 12345</p>
          </div>
          <div className="flex items-center gap-2 md:border-l-2 md:border-l-primary-yellow md:px-4">
            <MdLocalPhone className="text-primary-yellow text-xl" />
            <p>(457) 570 5682</p>
          </div>
          <div className="flex items-center gap-2 md:border-l-2 md:border-l-primary-yellow md:px-4">
            <LuClock8 className="text-primary-yellow text-xl" />
            <p>11:00-21:00</p>
          </div>
        </div>
        <button
          className={`hidden md:block text-2xl relative ${
            cartItems.length > 0
              ? "after:absolute after:-top-[2px] after:-right-[2px] after:w-2 after:h-2 after:bg-white after:rounded-full"
              : ""
          }`}
          onClick={() => {
            dispatch(openModal());
          }}
        >
          <MdShoppingCart className="text-primary-yellow" />
        </button>
      </div>
      <nav className="flex justify-between items-center md:mt-4 p-4 xl:px-0 relative">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-3xl font-cabin font-bold">Buta Pizza</h1>
        </div>
        <ul className="hidden items-center gap-3 font-bold uppercase md:flex">
          <li className="hover:text-primary-yellow hover:border-b hover:border-b-primary-yellow">
            <button onClick={() => dispatch(scrollToSection("home"))}>
              Home
            </button>
          </li>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <li className="hover:text-primary-yellow hover:border-b hover:border-b-primary-yellow">
            <button onClick={() => dispatch(scrollToSection("about"))}>
              About
            </button>
          </li>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <li className="hover:text-primary-yellow hover:border-b hover:border-b-primary-yellow">
            <button onClick={() => dispatch(scrollToSection("menu"))}>
              Menus
            </button>
          </li>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <li className="hover:text-primary-yellow hover:border-b hover:border-b-primary-yellow">
            <button onClick={() => dispatch(scrollToSection("gallery"))}>
              Gallery
            </button>
          </li>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <li className="hover:text-primary-yellow hover:border-b hover:border-b-primary-yellow">
            <button onClick={() => dispatch(scrollToSection("contact"))}>
              Contact
            </button>
          </li>
        </ul>
        <div className="flex gap-4 md:hidden">
          <button
            className={`text-2xl relative ${
              cartItems.length > 0
                ? "after:absolute after:-top-[2px] after:-right-[2px] after:w-2 after:h-2 after:bg-white after:rounded-full"
                : ""
            }`}
            onClick={() => {
              dispatch(openModal());
            }}
          >
            <MdShoppingCart className="text-primary-yellow" />
          </button>
          <button
            className="text-2xl hover:scale-110 transition duration-200"
            onClick={() => {
              dispatch(openNav());
            }}
          >
            <RiMenu3Line />
          </button>
        </div>
      </nav>
      {isOpenNav && (
        <>
          <motion.div
            className="fixed top-0 right-0 p-5 bg-primary-yellow max-w-[450px] min-h-screen z-20"
            variants={navVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" width={30} height={30} />
                <h1 className="text-2xl font-cabin font-bold">Buta Pizza</h1>
              </div>
              <button
                className="text-2xl hover:scale-110 transition duration-500"
                onClick={() => {
                  dispatch(closeNav());
                }}
              >
                <MdClose />
              </button>
            </div>
            <motion.ul
              className="flex flex-col items-center gap-8 font-bold uppercase my-16"
              variants={navListVariant}
            >
              <motion.li
                className="hover:text-primary-red hover:border-b hover:border-b-primary-red cursor-pointer"
                variants={navItemVariant}
              >
                <button
                  onClick={() => {
                    dispatch(closeNav());
                    dispatch(scrollToSection("home"));
                  }}
                >
                  Home
                </button>
              </motion.li>
              <motion.li
                className="hover:text-primary-red hover:border-b hover:border-b-primary-red cursor-pointer"
                variants={navItemVariant}
              >
                <button
                  onClick={() => {
                    dispatch(closeNav());
                    dispatch(scrollToSection("about"));
                  }}
                >
                  About
                </button>
              </motion.li>
              <motion.li
                className="hover:text-primary-red hover:border-b hover:border-b-primary-red cursor-pointer"
                variants={navItemVariant}
              >
                <button
                  onClick={() => {
                    dispatch(closeNav());
                    dispatch(scrollToSection("menu"));
                  }}
                >
                  Menus
                </button>
              </motion.li>
              <motion.li
                className="hover:text-primary-red hover:border-b hover:border-b-primary-red cursor-pointer"
                variants={navItemVariant}
              >
                <button
                  onClick={() => {
                    dispatch(closeNav());
                    dispatch(scrollToSection("gallery"));
                  }}
                >
                  Gallery
                </button>
              </motion.li>
              <motion.li
                className="hover:text-primary-red hover:border-b hover:border-b-primary-red cursor-pointer"
                variants={navItemVariant}
              >
                <button
                  onClick={() => {
                    dispatch(closeNav());
                    dispatch(scrollToSection("contact"));
                  }}
                >
                  Contact
                </button>
              </motion.li>
            </motion.ul>
            <div className="flex flex-col gap-4 border-t border-t-white py-6">
              <div className="flex items-center gap-2">
                <MdLocationPin className="text-primary-red text-xl" />
                <p>YOUR COUNTRY,YOUR CITY, 12345</p>
              </div>
              <div className="flex items-center gap-2">
                <MdLocalPhone className="text-primary-red text-xl" />
                <p>123 456 789</p>
              </div>
              <div className="flex items-center gap-2 ">
                <LuClock8 className="text-primary-red text-xl" />
                <p>11:00-21:00</p>
              </div>
            </div>
          </motion.div>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-55 z-10"></div>
        </>
      )}
      {isOpenModal && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-55 z-10"></div>
      )}
    </header>
  );
};

export default Header;
