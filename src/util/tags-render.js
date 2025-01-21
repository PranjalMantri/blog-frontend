function renderTags(tags) {
  return tags.slice(0, 3).map((tag, i) => <Tag key={i} tag={tag} />);
}

export default renderTags;
