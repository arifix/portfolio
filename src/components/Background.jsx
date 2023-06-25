const Background = ({ isDark }) => {
  return (
    <div
      className={`site-bg w-full h-screen fixed -z-10 ${
        isDark ? "hidden" : ""
      }`}
    >
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Background;
