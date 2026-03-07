import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

const Home = lazy(() => import("./pages/Home/Home"));
const Services = lazy(() => import("./pages/Services/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function RouteChangeHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function PageFallback() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      Loading page...
    </div>
  );
}

function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RouteChangeHandler />
      <Header />
      <Suspense fallback={<PageFallback />}>
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;