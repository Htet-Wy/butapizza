import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

const imgVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

const aboutVairant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.5,
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-white p-6 md:py-12 w-full min-h-screen flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="max-w-[350px] bg-primary-yellow text-center py-6 px-8">
          <motion.h1
            className="text-3xl font-cabin font-bold uppercase"
            variants={aboutVairant}
            initial="hidden"
            whileInView="visible"
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-sm"
            variants={aboutVairant}
            initial="hidden"
            whileInView="visible"
          >
            At Buta Pizza, we're more than just a pizzeria; we're a culinary
            experience dedicated to delighting your taste buds. With a
            commitment to quality ingredients and authentic recipes, each pizza
            we create tells a story of passion and craftsmanship. From
            traditional favorites to innovative creations, our menu reflects our
            love for great food and exceptional flavors. Join us on a journey of
            taste and indulge in the perfect slice of happiness.
          </motion.p>
        </div>
        <motion.div
          className="max-w-[550px]"
          variants={imgVariant}
          initial="hidden"
          whileInView="visible"
        >
          <img src={aboutImg} alt="about image" className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
