import svgPaths from "../../../imports/svg-aqdowdil4a";
import { services } from "../../../content/site";
import EmptyState from "./EmptyState";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";
import Wrapper from "./Wrapper";

const iconByName = {
  app: (
    <Wrapper additionalClassNames="w-8 h-8">
      <g id="App">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p21a43300} fill="#7E74F1" fillRule="evenodd" />
          <path d={svgPaths.p26670e80} fill="#7E74F1" />
          <path d={svgPaths.p29555780} fill="#7E74F1" />
        </g>
      </g>
    </Wrapper>
  ),
  backend: (
    <Wrapper additionalClassNames="w-8 h-8">
      <g id="crown">
        <path d={svgPaths.p3bc59100} stroke="#7E74F1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.518958" />
      </g>
    </Wrapper>
  ),
  web: (
    <Wrapper additionalClassNames="w-8 h-8">
      <g id="globe">
        <path d={svgPaths.p3bd0eaa0} stroke="#7E74F1" strokeWidth="0.518958" />
      </g>
    </Wrapper>
  ),
};

export default function Services() {
  const hasServices = services.length > 0;

  return (
    <section id="services" className="w-full bg-ink px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle subtitle="SERVICES" title="Specialized in" light />

        {hasServices ? (
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceItem
                key={service.title}
                icon={iconByName[service.icon]}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            variant="dark"
            title="Services are being defined"
            description="This section will show the areas where I can help once the service descriptions are ready."
          />
        )}
      </div>
    </section>
  );
}
