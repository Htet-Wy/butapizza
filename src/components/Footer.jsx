import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="contact"
      className="bg-primary-yellow flex flex-col flex-wrap justify-center items-start gap-10 py-6 px-12 text-[14px] md:flex-row md:justify-between"
    >
      <div className="max-w-[300px]">
        <h3 className="text-xl font-cabin font-bold uppercase">About Us</h3>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id
          expedita et neque soluta cum eum rerum porro voluptates fugit, sint a,
          ratione nemo enim eaque deserunt magni dolore provident.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-cabin font-bold uppercase">
          Working Hours
        </h3>
        <p className="mt-4">Sunday ............. Closed</p>
        <p>Monday ............. 11am - 21pm</p>
        <p>Tueday ............. 11am - 21pm</p>
        <p>Wednesday ............. 11am - 21pm</p>
        <p>Thurday ............. 11am - 21pm</p>
        <p>Friday ............. 11am - 21pm</p>
        <p>Saturday ............. 11am - 21pm</p>
      </div>
      <div className="max-w-[350px]">
        <h3 className="text-xl font-cabin font-bold uppercase">Contact Us</h3>
        <div className="flex flex-col gap-4 items-start justify-center mt-4">
          <div className="flex gap-4 items-start">
            <p>
              Your City, Your street, 18756, 100 Tenth Adventure, New York City,
              NY 1001
            </p>
          </div>
          <div className="flex gap-4 items-start">
            <p>(457) 570 5682, (385) 620 756</p>
          </div>
          <div className="flex gap-4 items-start">
            <p>info@butapizza.net</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 mt-6">
          <div>CopyRight 2024 Agency | All Rights Reserved</div>
          <ul className="flex justify-center items-center gap-4">
            <li className="border border-white rounded-full p-1">
              <a href="https://www.facebook.com" target="blank">
                <FaFacebookF />
              </a>
            </li>
            <li className="border border-white rounded-full p-1">
              <a href="https://www.instagram.com" target="blank">
                <FaInstagram />
              </a>
            </li>
            <li className="border border-white rounded-full p-1">
              <a href="https://www.pinterest.com" target="blank">
                <FaPinterestP />
              </a>
            </li>
            <li className="border border-white rounded-full p-1">
              <a href="https://www.linkedin.com" target="blank">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
