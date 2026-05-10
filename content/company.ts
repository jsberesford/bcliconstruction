export const company = {
  name: "BCLI Construction & Engineering",
  shortName: "BCLI",
  tagline: "Building Guyana from the Ground Up",
  founded: 2004,
  yearsOfExperience: 20,
  description:
    "BCLI is a civil construction and engineering firm based in West Coast Berbice, working on infrastructure projects across Guyana.",
  contact: {
    phone: "+592 617-3664",
    phoneHref: "tel:+5926173664",
    email: "bickram30@premiumconstruction.net",
    emailHref: "mailto:bickram30@premiumconstruction.net",
    address: {
      line1: "Lot E36 Bath Settlement",
      line2: "West Coast Berbice, Guyana",
      full: "Lot E36 Bath Settlement, West Coast Berbice, Guyana",
    },
  },
  regions: [
    "Region 2 (Pomeroon-Supenaam)",
    "Region 3 (Essequibo Islands-West Demerara)",
    "Region 4 (Demerara-Mahaica)",
    "Region 5 (Mahaica-Berbice)",
    "Region 6 (East Berbice-Corentyne)",
  ],
};

export type Company = typeof company;
