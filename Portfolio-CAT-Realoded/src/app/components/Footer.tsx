import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "../../base/components/Button";
import { tabs } from "../../base/utils/utils";

const Footer = () => {
  return (
    <div className="w-full px-32 justify-between items-center h-20 bg-black flex ">
      <p className="text-white font-semibold text-2xl">
        @2022 CHARLES KASASIRA
      </p>

      <div className="flex gap-6 items-center">
        <FaGithub className="w-6 h-6 text-white" />
        <FaTwitter className="w-6 h-6 text-white" />
        <FaYoutube className="w-6 h-6 text-white" />
      </div>
      <div className="flex gap-16 uppercase font-normal text-white cursor-pointer text-xl items-center">
        <ul className="flex gap-10 ">
          {tabs.map((tab) => (
            <li className="hover:underline" key={tab}>
              {tab}
            </li>
          ))}
        </ul>
        <Button
          text="Hire me"
          className="bg-transparent px-5 py-3 hover:bg-white transition-all text-white hover:text-black "
        />
      </div>
    </div>
  );
};

export default Footer;
