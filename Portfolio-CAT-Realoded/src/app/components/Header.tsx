import { Button } from "../../base/components/Button";
import { tabs } from "../../base/utils/utils";

const Header = () => {
  return (
    <>
      <header className="text-white flex justify-between items-center fixed bg-black w-full px-32 py-3  ">
        <div className="text-3xl font-bold cursor-pointer">KASASIRA</div>
        <div className="flex gap-16 uppercase font-normal cursor-pointer text-2xl items-center">
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
      </header>
      <div className="w-full h-fit px-32 pt-5 bg-home">
        <main className="flex justify-between pt-20">
          <div className="w-1/2 flex flex-col gap-6 ">
            <h1 className="text-5xl font-bold text-[#595959]">I'm</h1>
            <h1 className="text-5xl font-bold text-white">CHARLES KASASIRA,</h1>
            <p className="text-2xl font-normal text-white">
              A Front-end heavy developer aiming to design and develop
              experiences that make people's lives simple.
            </p>
            <div className="pt-5">
              <Button
                text="See My Projects"
                className="bg-[#D21F46] px-5 py-3 text-white w-48 font-normal text-lg border-none"
              />
            </div>
          </div>
          <div className="w-[400px] h-[400px] bg-person bg-contain bg-no-repeat"></div>
        </main>
      </div>
    </>
  );
};

export default Header;
