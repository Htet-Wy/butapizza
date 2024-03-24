import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

const menuVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.4,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const MenuContainer = () => {
  const { menuItems } = useSelector((store) => store.menu);
  return (
    <section
      id="menu"
      className="flex flex-col justify-center items-center gap-8 w-full min-h-screen bg-white p-12"
    >
      <h1 className="text-3xl text-primary-red font-cabin font-bold uppercase">
        Our Menus
      </h1>
      <motion.div
        className="flex flex-col justify-center items-center gap-12 md:flex-row md:flex-wrap"
        variants={menuVariant}
        initial="hidden"
        whileInView="visible"
      >
        {menuItems.map((menu) => (
          <motion.div variants={itemVariant} key={menu.id}>
            <MenuItem {...menu} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MenuContainer;
