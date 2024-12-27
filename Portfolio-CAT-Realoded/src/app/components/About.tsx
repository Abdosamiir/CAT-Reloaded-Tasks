import { Element } from "react-scroll";
import aboutMe from "../../assets/imgs/About-me-img.png";
import { Button } from "../../base/components/Button";

const About = () => {
  return (
    <Element name="About">
      <div className="flex justify-between items-center gap-20 py-16 px-32 w-[83%]">
        <img src={aboutMe} alt="aboutMeImage" className="w-[450px] " />
        <div className="flex flex-col justify-between gap-10">
          <div>
            <h1 className="text-4xl font-bold">ABOUT ME</h1>
            <h1 className="text-[70px]  font-bold text-[#E1E1E1]">WHO AM I</h1>
          </div>
          <p className="text-3xl font-medium">
            My name is Charles Derrick Kasasira, I am a computer science
            students and currently work as a front-end developer. I worked as a
            graphics designer during my high school vacation.
          </p>

          <div className="flex  gap-3">
            <Button
              text="Hire me"
              className="bg-black px-3 py-2 text-white text-lg font-medium  hover:bg-white hover:text-black hover:border-black hover:transition-all"
            />
            <Button
              text="See My Resume"
              className="border-black px-3 py-2 text-lg font-medium  hover:bg-black hover:text-white hover:transition-all"
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
