import { Button } from "./Button";

type Props = {
  src: string;
  h1: string;
  p: string;
};

export const BlogCard = ({ src, h1, p }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={src} alt="blogPhoto" />
      <h1 className="text-2xl font-bold">{h1}</h1>
      <p className="text-xl font-normal">{p}</p>
      <Button
        text="Read More"
        className="border-black w-[30%] uppercase px-1 py-1 hover:bg-gray-700 hover:text-white hover:transition-all"
      />
    </div>
  );
};
