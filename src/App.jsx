import { BlogCard } from "./components";

export default function App() {
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
      <BlogCard blog={blog} user={user} />
    </div>
  );
}
