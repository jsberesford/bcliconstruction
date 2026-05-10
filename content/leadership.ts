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
      "Bickram Kowchai is the founder of BCLI Construction & Engineering and a master civil engineer with twenty plus years of experience in the planning, design, and execution of infrastructure and construction projects throughout Guyana. He has worked across a wide breadth of projects, focused on structural integrity, efficiency, and design. Known for his practical approach and attention to detail, he brings deep technical knowledge and expert leadership to every project. His commitment to quality, safety, and reliability has been a consistent foundation of his work over the past two decades.",
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
      "Lilawati Ahmed, also known as Leta, was born in Guyana, South America, and is currently residing in New York, USA. She has been a Guyanese-American entrepreneur for the last three plus decades. Leta is a strategic thinker possessing strong interpersonal and conversational skills, along with years of management and advisory experience. She previously founded and operated two garment manufacturing companies located in the heart of the garment industry in New York City, New York. With her enriched experience in global sourcing, she traveled extensively to explore business opportunities even outside the fields of garment-related sourcing and manufacturing. Besides her entrepreneurial quality, Leta was an active member of the New York Women Chamber of Commerce.",
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
