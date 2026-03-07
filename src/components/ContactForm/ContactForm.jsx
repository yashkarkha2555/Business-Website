import { useState } from "react";
import { validateEmail, validateRequired } from "../../utils/helpers";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (!validateRequired(form.name)) nextErrors.name = "Name is required";
    if (!validateEmail(form.email)) nextErrors.email = "Use a valid email";
    if (!validateRequired(form.message)) nextErrors.message = "Message is required";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStatus("Thanks! Your message has been received.");
      setForm({ name: "", email: "", company: "", message: "" });
    } else {
      setStatus("");
    }
  };

  return (
    <form className="card contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field-grid">
        <label>
          Full name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email address
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
      </div>

      <label>
        Company (optional)
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
        />
      </label>

      <label>
        Project details
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className="error">{errors.message}</span>}
      </label>

      <button type="submit" className="primary-btn">
        Send message
      </button>
      {status && <p className="success">{status}</p>}
    </form>
  );
}

export default ContactForm;
