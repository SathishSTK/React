import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setError("Please fill all the fields.");
      setSuccess(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email.");
      setSuccess(false);
      return;
    }

    if (formData.phone.length < 10) {
      setError("Phone number must contain at least 10 digits.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="page">

      <div className="page-heading">
        <span>CONTACT US</span>
        <h1>Let's Talk</h1>

        <p>
          Have a question? Send us a message.
        </p>
      </div>

      <div className="contact-wrapper">

        <div className="contact-info">

          <h2>Get in Touch</h2>

          <p>
            Our support team is ready to help you.
          </p>

          <div className="contact-item">
            📧 support@novacart.com
          </div>

          <div className="contact-item">
            📞 +91 98765 43210
          </div>

          <div className="contact-item">
            📍 Chennai, India
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          {error && (
            <div className="form-error">
              ❌ {error}
            </div>
          )}

          {success && (
            <div className="form-success">
              ✅ Message sent successfully!
            </div>
          )}

          <button className="primary-btn">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;