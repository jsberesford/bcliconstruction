export type Leader = {
  id: string;
  name: string;
  knownAs?: string;
  role: string;
  shortBio: string;
  fullBio: string;
  photoSlot: string;
};

export const leaders: Leader[] = [
  {
    id: "bickram-kowchai",
    name: "Bickram Kowchai",
    role: "Founder, Master Civil Engineer",
    shortBio:
      "Master civil engineer with twenty plus years of experience planning, designing, and executing infrastructure and construction projects across Guyana.",
    fullBio:
      "Bickram Kowchai is the founder of BCLI Construction & Engineering and a master civil engineer with twenty plus years of experience in the planning, design, and execution of infrastructure and construction projects throughout Guyana. He has worked across a wide range of project types, with structural integrity and field efficiency at the center of how he approaches the work. His method on site is direct: check the drawings against the conditions, then build to what the drawings say.",
    photoSlot: "/leadership/bickram-placeholder",
  },
  {
    id: "lilawati-ahmed",
    name: "Lilawati Ahmed",
    knownAs: "Leta",
    role: "Chief Operating Officer",
    shortBio:
      "Guyanese-American entrepreneur of three plus decades. Previously founded and operated two garment manufacturing companies in the heart of the New York City garment industry. Built her career around global sourcing, with active membership in the New York Women Chamber of Commerce.",
    fullBio:
      "Lilawati Ahmed, also known as Leta, was born in Guyana, South America, and is currently residing in New York, USA. A Guyanese-American entrepreneur for three plus decades, she built her career in the New York City garment industry, where she founded and operated two garment manufacturing companies. Her experience in global sourcing took her well beyond garment-related work, with extensive travel to pursue business opportunities across multiple sectors. She brings years of management and advisory experience to BCLI's operations, along with her active membership in the New York Women Chamber of Commerce.",
    photoSlot: "/leadership/leta-placeholder",
  },
];

export const ltaSpecifics = {
  bornIn: "Guyana, South America",
  residingIn: "New York, USA",
  yearsAsEntrepreneur: "three plus decades",
  industry: "New York City garment industry",
  numberOfCompanies: 2,
  globalSourcing: true,
  chamber: "New York Women Chamber of Commerce",
};
