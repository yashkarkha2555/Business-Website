import { useEffect, useState } from "react";

function TestimonialSlider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [items.length]);

  const currentItem = items[currentIndex];

  return (
    <section className="card testimonial" aria-label="Client testimonials">
      <p className="quote">"{currentItem.quote}"</p>
      <p className="author">{currentItem.author}</p>
      <p className="role">{currentItem.role}</p>

      <div className="slider-controls" aria-label="Testimonial controls">
        <button
          type="button"
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
          }
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default TestimonialSlider;
