import formatDate from "../util/format-date";

function LandingPageBlogCard({ blog, user }) {
  const { createdAt, title, description, coverImage } = blog;
  const date = formatDate(createdAt);

  return (
    <div className="flex flex-row max-w-6xl m-4 bg-neutral-50 rounded-lg">
      <div className="flex flex-col justify-stretch gap-4 w-[60%] py-12 px-5 h-auto">
        <div className="text-4xl font-inter font-bold text-slate-800 mt-2">
          {title}
        </div>
        <div className="text-lg semibold text-gray-500">{description}</div>
        <div className="flex gap-5 items-center">
          <div className="text-sm semi-bold text-gray-500">{user.name}</div>
          <div className="text-sm text-gray-500">{date} · 5 min read</div>
        </div>
      </div>
      {/* Blog Cover Image  */}
      <div className="p-8 w-[40%]">
        <img src={coverImage} alt={title} className="object-cover rounded-md" />
      </div>
    </div>
  );
}

export default LandingPageBlogCard;
