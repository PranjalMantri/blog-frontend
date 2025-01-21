import { BlogCard, LandingPageBlogCard } from "../components";

function LandingPage() {
  const user = {
    name: "John Doe",
    avatarImage: "src/assets/blogAuthorAvatar.png",
  };

  const blog = {
    title: "Getting Started with Web Development",
    description:
      "Learn the fundamentals of web development and start your journey to becoming a full-stack developer",
    tags: ["Web Dev"],
    coverImage: "src/assets/blogCoverImage.svg",
    createdAt: new Date(),
  };

  return (
    <div className="px-40">
      <div className="flex flex-col justify-center gap-4 items-center py-9">
        <div className="text-6xl font-bold ">Where good Ideas find you</div>
        <div className="text-xl max-w-[50%] text-center">
          Read and share new perspectives on just about any topic. Everyone's
          welcome.
        </div>
      </div>
      <div className="flex justify-center items-center">
        <LandingPageBlogCard blog={blog} user={user} />
      </div>
      <div className="flex flex-col justify-center gap-4 px-4 py-9">
        <div className="text-3xl font-semibold text-slate-800">
          Trending now on BlogSpace
        </div>
      </div>
      <div className="flex gap-4">
        <BlogCard blog={blog} user={user} />
        <BlogCard blog={blog} user={user} />
        <BlogCard blog={blog} user={user} />
      </div>
    </div>
  );
}

export default LandingPage;
