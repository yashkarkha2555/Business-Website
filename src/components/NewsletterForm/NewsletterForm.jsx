import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email to subscribe.");
      return;
    }

    setMessage("Subscribed successfully. Updates are on the way.");
    setEmail("");
  };

  return (
    <form className="newsletter card" onSubmit={handleSubmit} noValidate>
      <h3>Get frontend insights every week</h3>
      <p>Short, practical product and engineering tips for growing teams.</p>

      <div className="newsletter-actions">
        <label className="sr-only" htmlFor="newsletter-email">
          Newsletter email
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit" className="primary-btn">
          Subscribe
        </button>
      </div>
      {message && <p className="newsletter-message">{message}</p>}
    </form>
  );
}

export default NewsletterForm;
