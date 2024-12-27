import { Element } from "react-scroll";
import jonathan from "/imgs/person.png";

const Contact = () => {
  return (
    <Element name="Contact">
      <div className="relative -z-10 bg-testimonals text-white text-center p-6 h-[250px] bg-cover bg-no-repeat">
        <div className="mt-10 max-w-[60%] mx-auto">
          <p className="text-3xl font-semibold">
            I had the opportunity to work with Goph Technologies as a graphics
            designer
          </p>
        </div>

        <div className="absolute inset-x-0 -bottom-16 mx-auto flex justify-center">
          <img
            src={jonathan}
            alt="Jonathan Rukundo"
            className="w-36 h-36 rounded-full border-white"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-14">
        <h4 className="text-2xl font-bold">Jonathan Rukundo</h4>
        <p className="text-lg font-bold opacity-50">Front-End Developer</p>
      </div>
    </Element>
  );
};

export default Contact;
