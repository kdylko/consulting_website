export default function Services() {
  const services = [
    "Predictive analytics",
    "Classification",
    "Fraud detection",
    "Recommendation systems",
    "Natural language processing (NLP)",
    "Other",
  ];

  return (
    <section id="services" className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-700 mb-8 md:mb-10 text-center leading-relaxed">
            We specialize in delivering custom-made AI POC solutions and Machine
            Learning solutions for businesses.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Our services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <li
                key={index}
                className="bg-gray-50 rounded-lg px-6 py-4 md:py-5 hover:shadow-md transition-shadow border border-gray-100 flex items-center"
              >
                <span className="text-primary-600 mr-3 font-semibold">•</span>
                <span className="text-gray-800 font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

