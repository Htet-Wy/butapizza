import { useDispatch, useSelector } from "react-redux";
import About from "./components/About";
import Gallery from "./components/Gallery";
import MenuContainer from "./components/MenuContainer";
import { calculateTotal, getMenuItems } from "./features/menu/menuSlice";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { scrollToSection } from "./features/scroll/scrollSlice";

function App() {
  const { cartItems } = useSelector((state) => state.menu);
  const { scrollToSectionId } = useSelector((state) => state.scroll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getMenuItems());
  }, []);

  useEffect(() => {
    if (scrollToSectionId) {
      const element = document.getElementById(scrollToSectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      dispatch(scrollToSection(null));
    }
  }, [scrollToSectionId]);

  return (
    <main className="text-white bg-primary-red  w-full relative">
      <Home />
      <About />
      <MenuContainer />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
