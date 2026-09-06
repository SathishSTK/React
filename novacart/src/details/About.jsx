const About = () => {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Quick and reliable delivery to your doorstep.",
    },
    {
      icon: "🔒",
      title: "Secure Shopping",
      text: "Your shopping experience is safe and secure.",
    },
    {
      icon: "💰",
      title: "Best Prices",
      text: "Get quality products at affordable prices.",
    },
    {
      icon: "❤️",
      title: "Customer First",
      text: "We always put our customers first.",
    },
  ];

  return (
    <div className="page">

      <div className="page-heading">
        <span>ABOUT US</span>
        <h1>Why Choose NovaCart?</h1>
        <p>
          NovaCart is a modern e-commerce platform created
          to make online shopping simple and enjoyable.
        </p>
      </div>

      <div className="feature-grid">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default About;