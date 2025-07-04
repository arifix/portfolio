interface SingleWorkProps {
  image: string;
  title: string;
  description: string;
  type: string;
  category: string;
  used_tech: string;
  demo_url: string;
  source_url: string;
}

const SingleWork: React.FC<SingleWorkProps> = ({
  image,
  title,
  description,
  type,
  category,
  used_tech,
  demo_url,
  source_url,
}) => {
  const techs = used_tech.split(",");

  return (
    <div className="single-work">
      <div>
        <div className="w-full md:w-1/3">
          <img src={image} alt={title} width={500} height={300} />
        </div>
        <div className="w-full md:w-2/3">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="py-4">
            {techs.map((val, id) => (
              <div key={id} className="used-tech">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                  <p>{val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="work-type md:flex font-bold text-gray-700">
            <div className="w-full flex space-x-3">
              <div className="w-1/2">
                <h4>Type</h4>
                <p>{type}</p>
              </div>
              <div className="w-1/2">
                <h4>Category</h4>
                <p>{category}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 pt-5">
            <a href={demo_url} target="_blank" rel="noreferrer">
              Live Demo
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            {source_url ? (
              <a href={source_url} target="_blank" rel="noreferrer">
                Source Code
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWork;
