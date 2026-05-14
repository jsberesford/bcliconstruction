export type EquipmentItem = {
  src?: string;
  alt: string;
  label: string;
  placeholder?: boolean;
};

export const equipment: EquipmentItem[] = [
  {
    alt: "A tracked hydraulic excavator with extended boom on a prepared site.",
    label: "Hydraulic excavator",
    placeholder: true,
  },
  {
    alt: "A concrete mixer truck with a rotating drum at the rear, parked on a pour day.",
    label: "Concrete mixer truck",
    placeholder: true,
  },
  {
    alt: "A wheel loader with a wide front bucket moving aggregate on a yard.",
    label: "Wheel loader",
    placeholder: true,
  },
  {
    alt: "A heavy dump truck with a raised tipping bed on an access road.",
    label: "Dump truck",
    placeholder: true,
  },
  {
    alt: "A vibratory soil compactor with a smooth drum on a road sub base.",
    label: "Vibratory compactor",
    placeholder: true,
  },
  {
    alt: "A bulldozer with an angled blade pushing earth across a cleared lot.",
    label: "Bulldozer",
    placeholder: true,
  },
  {
    alt: "A backhoe loader with a front bucket and rear digging arm at the side of a trench.",
    label: "Backhoe loader",
    placeholder: true,
  },
  {
    alt: "A small mobile crane with a telescopic boom positioned for a lift.",
    label: "Mobile crane",
    placeholder: true,
  },
];
