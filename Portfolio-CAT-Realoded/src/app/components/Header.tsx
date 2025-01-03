import { Button } from "../../base/components/Button";
import { tabs } from "../../base/utils/utils";
import { Element, Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header className="text-white flex justify-between items-center fixed bg-[#080808] w-full px-32 py-3  ">
        <Link to={"Home"} spy={true} smooth={true} duration={150}>
          <div className="text-3xl font-bold cursor-pointer">KASASIRA</div>
        </Link>
        <div className="flex gap-16 uppercase font-normal cursor-pointer text-2xl items-center">
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
      </header>
      <Element name="Home">
        <div className="w-full h-fit px-32 pt-5 bg-home">
          <main className="flex justify-between pt-20">
            <div className="w-1/2 flex flex-col gap-6 ">
              <h1 className="text-5xl font-bold text-[#595959]">I'm</h1>
              <h1 className="text-5xl font-bold text-white">
                CHARLES KASASIRA,
              </h1>
              <p className="text-2xl font-normal text-white">
                A Front-end heavy developer aiming to design and develop
                experiences that make people's lives simple.
              </p>
              <div className="pt-5">
                <Link to={"Work"} spy={true} smooth={true} duration={150}>
                  <Button
                    text="See My Projects"
                    className="bg-[#D21F46] hover:bg-[#d21f46e3] px-5 py-3 text-white w-48 font-normal text-lg border-none"
                  />
                </Link>
              </div>
            </div>
            <div className="w-[400px] h-[400px] bg-person bg-contain bg-no-repeat"></div>
          </main>
        </div>
      </Element>
    </>
  );
};

export default Header;
