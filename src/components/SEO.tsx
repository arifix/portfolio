import { Helmet } from "react-helmet-async";
import portfolio from "../utils/arif_khan_portfolio.json";

const SEO = () => {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Arif Khan — Projects",
    description: "Web development projects by Arif Khan, Full Stack Developer.",
    numberOfItems: portfolio.projects.length,
    itemListElement: portfolio.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        url: project.demo_url || project.source_url,
        applicationCategory: project.category,
        operatingSystem: "Web",
        author: {
          "@type": "Person",
          name: "Arif Khan",
        },
        datePublished: project.year,
        ...(project.source_url
          ? { codeRepository: project.source_url }
          : {}),
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(projectsSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
