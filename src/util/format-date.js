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

export default formatDate;
