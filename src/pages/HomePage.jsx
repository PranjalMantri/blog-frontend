import { useState } from "react";
import Filters from "../components/Filters";
import { BlogCard, SubSection } from "../components";

function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const filters = ["All", "Technology", "Writing", "Programming"];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
      {/* Filters and Search Bar */}
      <div className="flex items-center justify-between gap-4 px-4 py-5">
        <Filters
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-full px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#16a34a] w-1/3"
        />
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-3 gap-4">
        <BlogCard blog={blog} user={user} />
        <BlogCard blog={blog} user={user} />
        <BlogCard blog={blog} user={user} />
      </div>

      {/* Categories */}
      <div className="flex flex-col justify-center gap-4 px-4 py-5">
        <p className="text-3xl font-bold flex">Tech</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <BlogCard blog={blog} user={user} />
        <BlogCard blog={blog} user={user} />
        <BlogCard blog={blog} user={user} />
      </div>

      <div className="flex flex-col justify-center gap-4 px-4 py-5">
        <p className="text-3xl font-bold flex">Lifestyle</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <BlogCard blog={blog} user={user} />
        <BlogCard blog={blog} user={user} />
        <BlogCard blog={blog} user={user} />
      </div>

      <div className="flex flex-col justify-center gap-4 px-4 py-5">
        <p className="text-3xl font-bold flex">Finance</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <BlogCard blog={blog} user={user} />
        <BlogCard blog={blog} user={user} />
        <BlogCard blog={blog} user={user} />
      </div>
    </div>
  );
}

export default HomePage;
