import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "../../base/components/Button";
import { tabs } from "../../base/utils/utils";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full px-32 justify-between items-center h-20 bg-black flex ">
      <p className="text-white font-semibold text-2xl cursor-pointer">
        @2022 CHARLES KASASIRA
      </p>

      <div className="flex gap-6 items-center">
        <a href="https://github.com/Abdosamiir" target="_blank">
          <FaGithub className="w-6 h-6 text-white" />
        </a>
        <a href="https://x.com/3bdullrahman__1" target="_blank">
          <FaTwitter className="w-6 h-6 text-white" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <FaYoutube className="w-6 h-6 text-white" />
        </a>
      </div>
      <div className="flex gap-16 uppercase font-normal text-white cursor-pointer text-xl items-center">
        <ul className="flex gap-10 ">
          {tabs.map((tab) => (
            <Link to={tab} spy={true} smooth={true} duration={150} key={tab}>
              <li className="hover:underline" key={tab}>
                {tab}
              </li>
            </Link>
          ))}
        </ul>
        <Link to={"hire"} spy={true} smooth={true} duration={150}>
          <Button
            text="Hire me"
            className="bg-transparent px-5 py-3 hover:bg-white transition-all text-white hover:text-black "
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
