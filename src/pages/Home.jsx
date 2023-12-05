import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const goToProductsPage = () => {
    navigate("/products");
  };

  return (
    <>
      <Header />
      <div className="hero-container">
        <div className="hero-content">
          <h1>Shenron's Stash</h1>
          <p>The #1 store for Dragon Ball Z fan merch.</p>
          <button onClick={goToProductsPage}>Browse our range</button>
        </div>
      </div>
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default Home;
