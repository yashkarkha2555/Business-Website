import PortfolioFilter from "../../components/PortfolioFilter/PortfolioFilter";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
} from "../../utils/constants";

const Portfolio = () => {
  return (
    <>
      <section className="section">
        <div className="container narrow">
          <h1>Portfolio</h1>
          <p>
            Explore selected projects across SaaS, marketing, commerce, and
            analytics experiences.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <PortfolioFilter
            projects={PORTFOLIO_PROJECTS}
            categories={PORTFOLIO_CATEGORIES}
          />
        </div>
      </section>
    </>
  );
};

export default Portfolio;