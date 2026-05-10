export type Service = {
  id: string;
  index: string;
  title: string;
  summary: string;
  body: string;
};

export const services: Service[] = [
  {
    id: "drains",
    index: "01",
    title: "Concrete drains",
    summary: "Designed and installed for sites that need to stay dry.",
    body: "Reinforced concrete drainage built to spec, from residential roadside runs to industrial site systems. Engineered for the wet-season loads that Guyanese infrastructure faces every year.",
  },
  {
    id: "materials",
    index: "02",
    title: "Building materials",
    summary: "Supplied at project scale, delivered on schedule.",
    body: "Aggregate, sand, blocks, rebar, and finishing materials supplied to contractors and project teams. Local sourcing where it makes sense, regional sourcing when it does not.",
  },
  {
    id: "bridges",
    index: "03",
    title: "Bridges",
    summary: "Designed, fabricated, and installed for spans that get used hard.",
    body: "Small and mid-span bridge construction for rural and regional crossings. Structural engineering, formwork, casting, and installation handled in-house or with vetted partners.",
  },
  {
    id: "roads",
    index: "04",
    title: "Roads",
    summary: "Road construction and rehabilitation across coastal Guyana.",
    body: "Earthworks, sub-base, base course, surfacing. Whether the project is a kilometre of access road or a longer regional connector, the work is planned around the conditions that road will actually live in.",
  },
];
