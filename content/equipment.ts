export type EquipmentItem = {
  src?: string;
  alt: string;
  label: string;
  placeholder?: boolean;
};

export const equipment: EquipmentItem[] = [
  {
    src: "/equipment/cat-312d-pair.jpg",
    alt: "Two Caterpillar 312D tracked excavators staged side by side on a BCLI yard in Guyana.",
    label: "CAT 312D",
  },
  {
    src: "/equipment/cat-320e.jpg",
    alt: "Caterpillar 320E tracked excavator with grade control, parked at the yard.",
    label: "CAT 320E",
  },
  {
    src: "/equipment/long-reach-canal.jpg",
    alt: "Long reach Caterpillar 312D excavator working a concrete drainage channel beside a Guyana highway.",
    label: "Long reach 312D",
  },
  {
    src: "/equipment/cat-320c.jpg",
    alt: "Caterpillar 320C tracked excavator parked among the BCLI fleet.",
    label: "CAT 320C",
  },
  {
    src: "/equipment/long-reach-roadworks.jpg",
    alt: "Caterpillar 312D long reach excavator on a roadworks site with a smooth drum roller in the background.",
    label: "Roadworks 312D",
  },
  {
    src: "/equipment/cat-315c.jpg",
    alt: "Caterpillar 315C L tracked excavator on a cleared lot lined with conifers.",
    label: "CAT 315C L",
  },
  {
    src: "/equipment/long-reach-drainage.jpg",
    alt: "Long reach Caterpillar 312D excavator positioned beside a concrete drain along a highway in Guyana.",
    label: "Drainage works",
  },
];
