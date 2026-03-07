import ContactForm from "../../components/ContactForm/ContactForm";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import { FAQ_ITEMS } from "../../utils/constants";

const Contact = () => {
  return (
    <>
      <section className="section">
        <div className="container narrow">
          <h1>Contact</h1>
          <p>
            Tell us what you are building and we will share a practical frontend
            roadmap within one business day.
          </p>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container contact-layout">
          <div>
            <h2>Start a conversation</h2>
            <p>Email: hello@modernbusiness.dev</p>
            <p>Phone: +1 (555) 240-9911</p>
            <p>Hours: Monday to Friday, 9:00 AM to 6:00 PM</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Common questions</h2>
          <FAQAccordion faqs={FAQ_ITEMS} />
        </div>
      </section>
    </>
  );
};

export default Contact;