export default function Team() {
  const teamMembers = [
    {
      name: "Konstantin Dylko",
      description:
        "Digital Marketing Director at NAKED mobile (German telecom operator) with a unique blend of technical depth and strategic marketing expertise. Konstantin specializes in the intersection of data engineering, performance marketing, and business analytics. His technical stack includes SQL, Python, GCP, and AI-agent integration, while his strategic focus covers unit economics, investment valuation, and cohort analysis. He has hands-on experience building GDPR-compliant analytics systems and optimizing digital campaigns across Google, Meta, and programmatic platforms.",
    },
    {
      name: "Eugene Gapon",
      description:
        "15+ years of experience leading data initiatives across banking, mobility, automotive, and education sectors. Eugene has held executive roles in both agile startups and large corporations, overseeing the entire data lifecycle from collection and storage to advanced analytics, machine learning, and data product development. His expertise spans building scalable infrastructure for millions of users and implementing AI-driven solutions that directly impact bottom-line results.",
    },
    {
      name: "Andrey Seleznev",
      description: "Some description",
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

