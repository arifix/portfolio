import SecHeadings from "./SecHeadings";
import SingleWork from "./SingleWork";
import portfolio from "../utils/arif_khan_portfolio.json";

const Works = () => {
  return (
    <section
      id="works"
      className="works py-10 md:py-20 bg-slate-200 bg-opacity-50 scroll-mt-12"
    >
      <div className="container mx-auto mb-10 px-5 md:px-0">
        <SecHeadings
          heading="Works"
          subheading="Crafting Works that Inspire!"
        />
      </div>

      {!portfolio ? (
        <div className="container mx-auto mb-10 px-5 md:px-0 flex items-center justify-start">
          <h4 className="text-xl">Nothing to Show...</h4>
        </div>
      ) : (
        portfolio?.works?.map((val, id) => (
          <SingleWork
            key={id}
            image={val.image}
            title={val.title}
            description={val.description}
            type={val.type}
            category={val.category}
            used_tech={val.used_tech}
            demo_url={val.demo_url}
            source_url={val.source_url}
          />
        ))
      )}
    </section>
  );
};

export default Works;
