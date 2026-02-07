export default function Team() {
  const teamMembers = [
    {
      name: "Konstantin Dylko",
      description:
        "Over a decade of experience across data, analytics, and growth in digital and technology-driven businesses. Konstantin has held senior and executive roles at the intersection of data and digital marketing in fintech, telecom, automotive, and foodtech companies. He specializes in building data-driven growth systems, aligning analytics, unit economics, and performance marketing to drive scalable, measurable business impact.",
    },
    {
      name: "Eugene Gapon",
      description:
        "15+ years of experience leading data initiatives across banking, mobility, automotive, and education sectors. Eugene has held executive roles in both agile startups and large corporations, overseeing the entire data lifecycle from collection and storage to advanced analytics, machine learning, and data product development. His expertise spans building scalable infrastructure for millions of users and implementing AI-driven solutions that directly impact bottom-line results.",
    },
    {
      name: "Andrey Seleznev",
      description: "Extensive experience in strategy, business development, and scaling startup projects within the global automotive industry. Andrey has held executive roles focused on navigating complex international markets, driving product development, and fostering innovation. He specializes in aligning business planning, high-stakes negotiation, and general management to deliver measurable growth and operational excellence.",
    },
  ];

  return (
    <section id="team" className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {member.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

