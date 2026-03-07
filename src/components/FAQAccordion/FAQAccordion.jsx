import { useState } from "react";

function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? "");

  return (
    <section className="faq" aria-label="Frequently asked questions">
      {faqs.map((faq) => {
        const isOpen = faq.id === openId;

        return (
          <article key={faq.id} className="faq-item">
            <h3>
              <button
                type="button"
                className="faq-button"
                onClick={() => setOpenId((prev) => (prev === faq.id ? "" : faq.id))}
                aria-expanded={isOpen}
                aria-controls={`faq-${faq.id}`}
              >
                {faq.question}
              </button>
            </h3>
            {isOpen && (
              <p id={`faq-${faq.id}`} className="faq-answer">
                {faq.answer}
              </p>
            )}
          </article>
        );
      })}
    </section>
  );
}

export default FAQAccordion;
