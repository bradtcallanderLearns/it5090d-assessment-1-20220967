import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h1>Contact Us</h1>

        <div className="contact-details">
          <div className="contact-form-container">
            <h2>Send us a message</h2>

            <form className="contact-form">
              <label htmlFor="firstname">First name *</label>
              <input type="text" id="firstname" name="firstname" />

              <label htmlFor="lastname">Last name *</label>
              <input type="text" id="lastname" name="lastname" />

              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="phone">Phone</label>
              <input type="number" id="email" name="email" />

              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="5" />

              <button type="submit">Send</button>
            </form>
          </div>

          <div className="contact-address-container">
            <h2>Showroom details</h2>

            <div className="address-details-block">
              <h3>Address:</h3>
              <p>Building A</p>
              <p>123 Address Street</p>
              <p>Suburb</p>
              <p>City</p>
              <p>Country</p>
            </div>

            <div className="address-details-block">
              <h3>Phone:</h3>
              <p>09 123 4567</p>
            </div>

            <div className="address-details-block">
              <h3>Open hours:</h3>
              <p>
                Monday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>9:00am - 5:00pm</i>
              </p>
              <p>
                Tuesday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>9:00am - 5:00pm</i>
              </p>
              <p>
                Wednesday:&nbsp;&nbsp;&nbsp;<i>9:00am - 5:00pm</i>
              </p>
              <p>
                Thursday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>9:00am - 5:00pm</i>
              </p>
              <p>
                Friday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>9:00am - 5:00pm</i>
              </p>
              <p>
                Saturday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                <i>10:00am - 1:00pm</i>
              </p>
              <p>
                Sunday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>Closed</i>
              </p>
            </div>
            <p>
              <strong>*</strong> Public holiday open hours are a case-by-case
              basis.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
