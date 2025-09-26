function Heading({ children, level = 2 }) {
  const Tag = `h${level}`;
  return <Tag>{children}</Tag>;
}

export default Heading;