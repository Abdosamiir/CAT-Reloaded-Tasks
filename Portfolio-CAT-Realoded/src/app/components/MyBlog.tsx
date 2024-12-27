import { Element } from "react-scroll";
import { BlogCard } from "../../base/components/BlogCard";
import { blogData } from "../../base/utils/utils";

const MyBlog = () => {
  return (
    <Element name="hire">
      <div className="pt-20">
        <h1 className="text-5xl font-bold text-center ">My Blog</h1>
        <div className="flex gap-10 px-32 py-12">
          {blogData.map((blog) => (
            <BlogCard {...blog} key={blog.h1} />
          ))}
        </div>
        <div className="flex justify-end items-center  px-32 pb-14">
          <p className="text-xl font-normal cursor-pointer hover:underline">
            see more posts
          </p>
        </div>
      </div>
    </Element>
  );
};

export default MyBlog;
