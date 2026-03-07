import { useState } from "react";

function ServiceTabs({ services }) {
  const [activeTab, setActiveTab] = useState(services[0]?.id ?? "");
  const activeService = services.find((item) => item.id === activeTab) ?? services[0];

  return (
    <section className="tabs-section" aria-label="Service details">
      <div className="tab-list" role="tablist" aria-label="Services">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            role="tab"
            className={`tab-button ${activeTab === service.id ? "active" : ""}`}
            onClick={() => setActiveTab(service.id)}
            aria-selected={activeTab === service.id}
            aria-controls={`service-panel-${service.id}`}
            id={`service-tab-${service.id}`}
          >
            {service.name}
          </button>
        ))}
      </div>

      {activeService && (
        <article
          className="card service-panel"
          role="tabpanel"
          id={`service-panel-${activeService.id}`}
          aria-labelledby={`service-tab-${activeService.id}`}
        >
          <h3>{activeService.name}</h3>
          <p>{activeService.description}</p>
          <ul>
            {activeService.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      )}
    </section>
  );
}

export default ServiceTabs;
