import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import NewsletterForm from "../../components/NewsletterForm/NewsletterForm";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";
import {
  COMPANY_STATS,
  FEATURE_LIST,
  TESTIMONIALS,
} from "../../utils/constants";

function Home() {
  const [stats, setStats] = useState(COMPANY_STATS);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const response = await fetch("/api/business-data.json");
        if (!response.ok) {
          throw new Error("Unable to load business metrics");
        }

        const data = await response.json();
        if (Array.isArray(data.stats) && data.stats.length > 0) {
          setStats(data.stats);
        }
      } catch {
        setStats(COMPANY_STATS);
      }
    };

    fetchBusinessData();
  }, []);

  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="reveal-up">
            <p className="eyebrow">Frontend Excellence Studio</p>
            <h1>Build a high-performance business presence with modern React.</h1>
            <p>
              We create conversion-focused websites with accessibility, speed, and
              maintainable frontend architecture at the core.
            </p>

            <div className="cta-row">
              <Link className="primary-btn" to="/contact">
                Start your project
              </Link>
              <Link className="ghost-btn" to="/portfolio">
                View portfolio
              </Link>
            </div>
          </div>

          <aside className="hero-panel reveal-up">
            <h2>What you get</h2>
            <ul>
              <li>Responsive layouts from mobile to large desktop</li>
              <li>Semantic structure and keyboard-friendly interactions</li>
              <li>Performance-focused architecture and deployment readiness</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <h2>Capabilities</h2>
          <div className="feature-grid">
            {FEATURE_LIST.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Impact metrics</h2>
          <div className="stats-grid">
            {stats.map((stat) => (
              <article className="card stat" key={stat.id}>
                <p className="stat-value">{stat.value}</p>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container narrow">
          <h2>Client stories</h2>
          <TestimonialSlider items={TESTIMONIALS} />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}

export default Home;