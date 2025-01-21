import { LandingPageBlogCard } from "../components";

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
    <div>
      <div>Landing page</div>
      <div className="flex justify-center items-center">
        <LandingPageBlogCard blog={blog} user={user} />
      </div>
    </div>
  );
}

export default LandingPage;
