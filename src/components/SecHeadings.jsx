const SecHeadings = ({ heading, subheading }) => {
  return (
    <>
      <h2 className="section-title">{heading}</h2>
      <h3 className="section-tagline">{subheading}</h3>
    </>
  );
};

export default SecHeadings;
