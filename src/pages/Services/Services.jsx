import ServiceTabs from "../../components/ServiceTabs/ServiceTabs";
import { SERVICE_TABS } from "../../utils/constants";

const Services = () => {
  const processSteps = [
    {
      id: "discover",
      title: "Discover",
      description: "Audit your current frontend, goals, and user behavior data.",
    },
    {
      id: "design",
      title: "Design",
      description: "Define scalable UI patterns and interaction specifications.",
    },
    {
      id: "deliver",
      title: "Deliver",
      description: "Ship production-ready React pages with measurable outcomes.",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container narrow">
          <h1>Services</h1>
          <p>
            End-to-end frontend delivery for teams that need speed, structure,
            and long-term maintainability.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <ServiceTabs services={SERVICE_TABS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Delivery process</h2>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.id} className="card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;