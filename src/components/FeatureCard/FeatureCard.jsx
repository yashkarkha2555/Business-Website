function FeatureCard({ title, description, icon, action }) {
  return (
    <article className="card feature-card reveal-up">
      <p className="feature-icon" aria-hidden="true">
        {icon}
      </p>
      <h3>{title}</h3>
      <p>{description}</p>
      {action && <p className="feature-action">{action}</p>}
    </article>
  );
}

export default FeatureCard;