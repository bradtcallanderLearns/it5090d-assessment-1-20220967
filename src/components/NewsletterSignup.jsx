import "./NewsletterSignup.css";

const NewsletterSignup = () => {
  return (
    <div className="newsletter-container">
      <h2>Subscribe to our newsletter!</h2>
      <form className="newsletter-form">
        <input type="email" placeholder="Your email address" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
