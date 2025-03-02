import bgImage from "../assets/services/Rectangle 367.png";
const services = [
  { title: "Exterior Design", icon: "🏡" },
  { title: "Interior Design", icon: "🛋️" },
  { title: "Professional Design", icon: "📊" },
  { title: "Perfect Planning", icon: "🗺️" },
];

export default function Services() {
  return (
    <div
      className="relative w-full bg-cover bg-center shadow-amber-200"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
      <div className="relative z-10 grid lg:grid-cols-3 gap-8 p-8">
        {/* Left Section */}
        <div className="lg:px-8 py-8 mt-4">
          <h1 className=" text-3xl lg:text-5xl font-bold">
            Services <br /> Provided By Us
          </h1>
          <p className="mt-3">There are many variations of passages</p>
          <button className="px-8 py-3 text-lg font-semibold rounded bg-[#ECA76E] dark:text-gray-50 mt-5">
            Learn More
          </button>
        </div>

        {/*  Services */}
        <article className="relative w-[314px] lg:w-[444px] lg:h-[348px] overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl lg:mt-4">
          <img
            alt="Architecture"
            src={bgImage}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full pt-10 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6  lg:w-[444px] lg:h-[348px] rounded-lg  shadow-md transition hover:shadow-lg flex flex-col items-center text-center gap-6">
              <h3 className="mt-0.5 lg:mt-10 text-xl font-bold text-white">
                Architecture
              </h3>
              <p className="mt-2 text-sm text-white/95">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#ECA76E]"
              >
                Learn more →
              </a>
            </div>
          </div>
        </article>

   

        {/* Service Cards */}
        {services.map((service, i) => (
          <article
            key={i}
            className="w-[314px] lg:w-[444px] lg:h-[348px] rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg flex flex-col items-center text-center gap-6 mt-4 mb-4"
          >
            <span className="text-5xl">{service.icon}</span>
            <h3 className="mt-4 text-2xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-500 text-sm">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#ECA76E]"
            >
              Learn more →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
