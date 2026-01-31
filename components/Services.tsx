export default function Services() {
  const services = [
    {
      title: "У вас есть идея, но нет команды",
      description:
        "Поможем быстро собрать прототип (POC) и подтвердить ценность решения.",
    },
    {
      title: "Данные есть, но они не приносят пользы",
      description:
        "Выстроим инфраструктуру, которая превратит разрозненные логи в понятные отчеты и рычаги управления.",
    },
    {
      title: "Нужно масштабировать продажи или поддержку",
      description:
        "Внедрим AI-инструменты, которые снизят нагрузку на сотрудников и увеличат скорость реакции.",
    },
    {
      title: "Требуется глубокая экспертиза",
      description:
        "Если ваша текущая команда перегружена или сталкивается с нетипичными задачами в области ML/Data Engineering.",
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            When Can We Help You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

