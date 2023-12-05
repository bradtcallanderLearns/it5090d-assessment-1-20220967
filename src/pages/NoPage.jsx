import Header from "../components/Header";
import Footer from "../components/Footer";
import "./NoPage.css";

const NoPage = () => {
  return (
    <>
      <Header />
      <div className="no-page-container">
        <h1>404</h1>
        <p>Error - Page not found</p>
      </div>
      <Footer />
    </>
  );
};

export default NoPage;
