interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  result: string;
}

export default function Cases() {
  const cases: CaseStudy[] = [
    {
      title: "Lead Scoring: High-Value Prioritization System",
      challenge:
        "Sales team was overwhelmed with leads, treating all inquiries equally regardless of potential value or urgency.",
      solution:
        "Developed a real-time scoring algorithm that prioritized leads based on time since inquiry and cart composition, flagging high-ticket items like premium phone numbers.",
      result:
        "Sales team shifted focus to high-intent customers, significantly increasing conversion rates and average order value.",
    },
    {
      title: "Dynamic Pricing: Ride-Hailing Optimization",
      challenge:
        "Fixed pricing led to low order completion rates during peak demand, resulting in lost revenue and poor driver utilization.",
      solution:
        "Built a dynamic pricing model that adjusts fares in real-time based on current supply, demand, and external conditions.",
      result:
        "Increased order completion rates and overall company profitability through intelligent price optimization.",
    },
    {
      title: "Scalable Data Infrastructure: 2M MAU Platform",
      challenge:
        "Fragmented data across mobile apps, websites, and multiple advertising platforms made it impossible to get a unified view of business performance.",
      solution:
        "Built an end-to-end ETL pipeline with robust data normalization, consolidating all sources into a centralized warehouse.",
      result:
        "Delivered comprehensive BI dashboards providing real-time visibility into product health and marketing performance for 2 million monthly active users.",
    },
    {
      title: "Conversational AI: Social Media Sales Automation",
      challenge:
        "Slow response times on Facebook and Instagram led to lost sales opportunities and poor customer experience.",
      solution:
        "Integrated an AI agent with CRM and internal database, trained to pitch services, explain pricing, and handle objections directly in DMs.",
      result:
        "Created an automated sales funnel where AI qualifies leads, initiates sales conversations, and logs all interactions for human follow-up.",
    },
    {
      title: "Next Best Offer: Banking App Optimization",
      challenge:
        "Limited ad banner slots in mobile banking app required intelligent product recommendation to maximize engagement and revenue.",
      solution:
        "Developed response rate and LTV models for individual products, implementing a banner prioritization system based on user behavior.",
      result:
        "Increased both banner engagement rates and overall product revenue through personalized recommendations.",
    },
    {
      title: "Operational Efficiency: Support Ticket Prioritization",
      challenge:
        "Single-queue system for all customer requests caused critical inquiries to be significantly delayed.",
      solution:
        "Built a machine learning model to automatically identify and prioritize high-importance support tickets in real-time.",
      result:
        "Critical inquiries resolved within 30 minutes, dramatically improving customer satisfaction and operational efficiency.",
    },
  ];

  return (
    <section id="cases" className="py-12 md:py-20 lg:py-28 bg-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Case Studies
          </h2>
          <div className="space-y-8 md:space-y-12">
            {cases.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  {caseStudy.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-primary-700 mb-2 uppercase tracking-wide">
                      Challenge
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-primary-700 mb-2 uppercase tracking-wide">
                      Solution
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-primary-700 mb-2 uppercase tracking-wide">
                      Result
                    </h4>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {caseStudy.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

