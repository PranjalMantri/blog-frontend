import Tag from "./Tag";
import { Bookmark } from "./Icons/index";

function formatDate(createdAt) {
  const date = new Date(createdAt);
  return new Intl.DateTimeFormat("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
    .format(date)
    .replace(/(\d{1})(?=\d{2}\s)/, "$1,");
}

function renderTags(tags) {
  return tags.slice(0, 3).map((tag, i) => <Tag key={i} tag={tag} />);
}

function BlogCard({ blog, user }) {
  const { createdAt, title, description, coverImage, tags } = blog;
  const date = formatDate(createdAt);

  return (
    <div className="flex flex-col max-w-[21rem] rounded-lg h-auto m-4 shadow-md">
      {/* Blog Cover Image  */}
      <div>
        <img src={coverImage} alt={title} className="object-cover rounded-lg" />
      </div>

      {/* User Avatar  */}
      <div className="max-h-20 mx-4 mt-4 flex">
        <img
          src={user.avatarImage}
          alt={`${user.name}'s avatar`}
          className="h-11 w-11 rounded-full mr-4"
        />

        {/* Blog Info  */}
        <div>
          <div className="leading-4 text-md semi-bold text-black">
            {user.name}
          </div>

          <div className="text-sm text-gray-500">{date} · 5 min read</div>
        </div>
      </div>

      {/* Blog Title and Description  */}
      <div className="p-4">
        <div className="text-xl font-bold text-slate-900">{title}</div>
        <div className="text-md semibold text-gray-500 truncate">
          {description}
        </div>

        {/* Tags and Bookmark  */}
        <div className="flex gap-4 mt-2 justify-between w-full">
          <div className="flex gap-4 max-h-10">{tags && renderTags(tags)}</div>

          <div>
            <Bookmark />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
