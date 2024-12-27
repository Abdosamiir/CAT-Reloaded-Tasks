import { imgSrc } from "../../base/utils/utils";
import studentsapp from "../../assets/imgs/studentsapp.png";
import weatherapp from "../../assets/imgs/Mask group.png";
import ProjectData from "../../base/components/ProjectData";
import { Button } from "../../base/components/Button";
import { Element } from "react-scroll";

const Work = () => {
  return (
    <Element name="Work">
      <div className="text-5xl pt-8 font-bold text-center text-[#b4b4b4]">
        Worked with
      </div>
      <div className="flex gap-10 pt-4 justify-evenly w-full">
        {imgSrc.map((src) => (
          <img
            src={src}
            alt="workLogo"
            className="w-[100px] h-[95px]"
            key={src}
          />
        ))}
      </div>
      <div>
        <h1 className="text-5xl pt-8 font-bold text-center">Projects</h1>
      </div>
      <div className="flex gap-16 justify-center pt-14 px-32  ">
        <img
          src={studentsapp}
          alt="studentAppPhoto"
          className="w-[600px] h-[350px]"
        />
        <ProjectData />
      </div>
      <div className="flex gap-16 justify-center pt-4 px-32  ">
        <ProjectData />
        <img
          src={weatherapp}
          alt="weatherAppPhoto"
          className="w-[600px] h-[350px]"
        />
      </div>
      <div className="border-black flex justify-center items-center pt-5">
        <Button
          text="See More Work"
          className="border-black font-semibold px-5 py-3 text-lg hover:bg-black hover:text-white hover:transition-all"
        />
      </div>
    </Element>
  );
};

export default Work;
