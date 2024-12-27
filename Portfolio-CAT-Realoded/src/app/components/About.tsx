import aboutMe from "../../assets/imgs/About-me-img.png";
import { Button } from "../../base/components/Button";

const About = () => {
  return (
    <div className="flex justify-between items-center gap-20 pt-16 px-32 w-[80%]">
      <img src={aboutMe} alt="aboutMeImage" className="w-[400px] " />
      <div className="flex flex-col justify-between gap-10">
        <div>
          <h1 className="text-4xl font-bold">ABOUT ME</h1>
          <h1 className="text-[70px]  font-bold text-[#E1E1E1]">WHO AM I</h1>
        </div>
        <p className="text-2xl font-medium">
          My name is Charles Derrick Kasasira, I am a computer science students
          and currently work as a front-end developer. I worked as a graphics
          designer during my high school vacation.
        </p>

        <div className="flex  gap-3">
          <Button
            text="Hire me"
            className="bg-black px-2 py-1 text-white font-medium  hover:bg-white hover:text-black hover:border-black hover:transition-all"
          />
          <Button
            text="See My Resume"
            className="border-black px-2 py-1 font-medium  hover:bg-black hover:text-white hover:transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
