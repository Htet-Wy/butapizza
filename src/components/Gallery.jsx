import { motion } from "framer-motion";
import galleryOne from "../assets/gallery1.jpg";
import galleryTwo from "../assets/gallery2.jpg";
import galleryThree from "../assets/gallery3.jpg";
import galleryFour from "../assets/gallery4.jpg";
import galleryFive from "../assets/gallery5.jpg";
import gallerySix from "../assets/gallery6.jpg";
import gallerySeven from "../assets/gallery7.jpg";
import galleryEight from "../assets/gallery8.jpg";
import { useRef } from "react";

const galleryVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 5,
      staggerChildren: 0.5,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="flex flex-col justify-center items-center gap-6 w-full min-h-screen md:gap-12 py-12"
    >
      <h1 className="text-3xl font-cabin font-bold uppercase">Gallery</h1>
      <motion.div
        className="flex flex-wrap justify-center items-center gap-4 max-w-[800px] sm:gap-0"
        variants={galleryVariant}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div className="w-[200px] h-[200px]" variants={itemVariant}>
          <img
            src={galleryOne}
            alt="gallery image"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div className="w-[200px] h-[200px]" variants={itemVariant}>
          <img
            src={galleryTwo}
            alt="gallery image"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div className="w-[200px] h-[200px]" variants={itemVariant}>
          <img
            src={galleryThree}
            alt="gallery image"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div className="w-[200px] h-[200px]" variants={itemVariant}>
          <img
            src={galleryFour}
            alt="gallery image"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div className="w-[200px] h-[200px]" variants={itemVariant}>
          <img
            src={galleryFive}
            alt="gallery image"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div className="w-[200px] h-[200px]" variants={itemVariant}>
          <img
            src={gallerySix}
            alt="gallery image"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div className="w-[200px] h-[200px]" variants={itemVariant}>
          <img
            src={gallerySeven}
            alt="gallery image"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div className="w-[200px] h-[200px]" variants={itemVariant}>
          <img
            src={galleryEight}
            alt="gallery image"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gallery;
