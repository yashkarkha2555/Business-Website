import { TEAM_MEMBERS } from "../../utils/constants";

function About() {
  const values = [
    {
      id: "clarity",
      title: "Clarity",
      description: "Readable code, clear UX, and shared team understanding.",
    },
    {
      id: "craft",
      title: "Craft",
      description: "Thoughtful interfaces that balance aesthetics and usability.",
    },
    {
      id: "impact",
      title: "Impact",
      description: "Every frontend decision maps to measurable business outcomes.",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container narrow">
          <h1>About Us</h1>
          <p>
            We are a multidisciplinary frontend studio focused on product quality,
            accessibility, and performance at scale.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container">
          <h2>Our values</h2>
          <div className="process-grid">
            {values.map((value) => (
              <article key={value.id} className="card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Core team</h2>
          <div className="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <article key={member.id} className="card team-card">
                <div className="avatar" aria-hidden="true">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
