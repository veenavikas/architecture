export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'residential' | 'commercial' | 'public' | 'interior' | 'masterplan';
  location: {
    city: string;
    country: string;
  };
  year: number;
  area?: string;
  client?: string;
  status: 'built' | 'unbuilt' | 'in-progress';
  featured: boolean;
  coverImage: string;
  images: string[];
  brief: string;
  concept: string;
  narrative: string;
  result?: string;
  tags: string[];
  awards?: string[];
  has3DModel?: boolean;
  modelPath?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'the-weave-house',
    title: 'The Weave House',
    category: 'residential',
    location: { city: 'Glasgow', country: 'UK' },
    year: 2023,
    area: '3,200 sqft',
    client: 'Private',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/weave-house-cover.jpg',
    images: [
      '/images/projects/weave-house-1.jpg',
      '/images/projects/weave-house-2.jpg',
      '/images/projects/weave-house-3.jpg',
    ],
    brief: 'A young family sought a home that could evolve with them — open yet intimate, connected to Glasgow\'s industrial heritage yet unmistakably new. The site, a narrow Victorian plot, demanded ingenuity.',
    concept: 'The design draws from the city\'s textile-weaving history. Structural elements interlock like warp and weft — a dialogue between load-bearing and lightness. The facade weaves brick and weathered steel in alternating rhythms.',
    narrative: 'Working within Glasgow\'s conservation zone required extensive negotiation with planners. The solution was a rear extension that respects the existing roofline while introducing a dramatic double-height atrium flooded with northern light. Locally sourced sandstone anchors the new to the old.',
    result: 'The house has become a landmark on its street — frequently cited by neighbours and visited by architecture students from the Glasgow School of Art. The family reports the quality of light has transformed their daily life.',
    tags: ['Residential', 'Conservation', 'Brick', 'Adaptive Reuse'],
    awards: ['RIAS Award Longlist 2023'],
  },
  {
    id: '2',
    slug: 'civic-skin-pavilion',
    title: 'Civic Skin Pavilion',
    category: 'public',
    location: { city: 'Edinburgh', country: 'UK' },
    year: 2022,
    area: '800 sqft',
    client: 'Edinburgh City Council',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/civic-skin-cover.jpg',
    images: [
      '/images/projects/civic-skin-1.jpg',
      '/images/projects/civic-skin-2.jpg',
    ],
    brief: 'A temporary public installation for the Edinburgh Festival — a gathering space that could accommodate 60 people for performances, discussions, and spontaneous social encounters.',
    concept: 'The pavilion is conceived as a civic skin — a membrane that defines inside and outside without fully separating them. Perforated steel panels modulate light, sound, and air, creating a permeable threshold between public and intimate.',
    narrative: 'The structure was designed for assembly by non-specialists in under 48 hours. Each module bolts to its neighbour without welds or cranes. The geometry — derived from a triangulated grid — gives the pavilion structural rigidity while allowing visual porosity.',
    result: 'Over 12,000 visitors passed through the pavilion during the three-week festival. It was subsequently reassembled at a school in Leith as a permanent outdoor classroom.',
    tags: ['Public', 'Pavilion', 'Steel', 'Parametric'],
    awards: ['Shortlisted — Architecture at the Festival 2022'],
  },
  {
    id: '3',
    slug: 'terrace-lattice',
    title: 'Terrace Lattice',
    category: 'commercial',
    location: { city: 'Hyderabad', country: 'India' },
    year: 2021,
    area: '12,000 sqft',
    client: 'Confidential Developer',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/terrace-lattice-cover.jpg',
    images: [
      '/images/projects/terrace-lattice-1.jpg',
      '/images/projects/terrace-lattice-2.jpg',
      '/images/projects/terrace-lattice-3.jpg',
    ],
    brief: 'A mixed-use development in Hyderabad\'s rapidly evolving Kokapet financial district. The brief called for flexible office floors above ground-floor retail, with an identity strong enough to attract premium tenants.',
    concept: 'Inspired by the lattice screens (jalis) of Deccani architecture, the facade is a contemporary reinterpretation of this vernacular sunshading device. A steel lattice skin wraps the building, filtering sun while creating a play of shadow that changes throughout the day.',
    narrative: 'The lattice geometry was developed parametrically in Grasshopper, responding to solar analysis data for Hyderabad\'s climate. The pattern density varies by facade orientation — denser on the west, more open on the north. Locally fabricated by Hyderabad metalworkers, the project created 45 skilled jobs.',
    result: 'The building achieved 95% occupancy within four months of completion. The facade has been cited in three architectural publications as an example of climate-responsive contemporary design in Telangana.',
    tags: ['Commercial', 'Mixed Use', 'Parametric', 'Vernacular', 'Jali'],
    awards: ['IIID Award 2022 — Commercial Category'],
  },
  {
    id: '4',
    slug: 'vernacular-reimagined',
    title: 'Vernacular Reimagined',
    category: 'public',
    location: { city: 'Vijayawada', country: 'India' },
    year: 2020,
    area: '18,500 sqft',
    client: 'Andhra Pradesh State Cultural Authority',
    status: 'built',
    featured: true,
    coverImage: '/images/projects/vernacular-cover.jpg',
    images: [
      '/images/projects/vernacular-1.jpg',
      '/images/projects/vernacular-2.jpg',
      '/images/projects/vernacular-3.jpg',
    ],
    brief: 'A cultural center for Vijayawada celebrating the arts and crafts of coastal Andhra Pradesh. The facility needed to house a gallery, performance space, craft workshops, and a roof terrace overlooking the Krishna River.',
    concept: 'The design begins with the Kalamkari — the narrative textile tradition of the region. The building\'s plan follows the compositional logic of a Kalamkari panel: border, field, motif, and centre. Traditional red oxide and lime plaster give the surfaces their character.',
    narrative: 'Structural columns are expressed as abstracted palm trees — referencing the regional landscape while solving the 9m spans required for the gallery spaces. Local artisans were commissioned to embed kalamkari-motif tile panels into the courtyard walls. Rainwater is harvested and used for the craft workshop water supply.',
    result: 'The center has hosted over 200 events since opening. It received the Andhra Pradesh State Award for Cultural Architecture 2021 and has been shortlisted for the Aga Khan Award cycle.',
    tags: ['Cultural', 'Public', 'Vernacular', 'Kalamkari', 'Courtyard'],
    awards: ['AP State Award — Cultural Architecture 2021', 'Aga Khan Award Shortlist 2022'],
  },
  {
    id: '5',
    slug: 'light-lattice-interiors',
    title: 'Light Lattice Interiors',
    category: 'interior',
    location: { city: 'Glasgow', country: 'UK' },
    year: 2023,
    area: '4,500 sqft',
    client: 'Private Restaurant Group',
    status: 'built',
    featured: false,
    coverImage: '/images/projects/light-lattice-cover.jpg',
    images: [
      '/images/projects/light-lattice-1.jpg',
      '/images/projects/light-lattice-2.jpg',
    ],
    brief: 'Transform a Victorian warehouse basement into a premium dining experience that references Indian textile culture within a contemporary European context.',
    concept: 'A play of light filtered through woven screens creates a shifting dappled environment — referencing both the Indian jali tradition and Scottish tartan patterns. The material palette combines raw stone, bleached oak, and handwoven textiles.',
    narrative: 'The existing brick vaults were retained and exposed. New brass joinery reads as a contemporary layer over the historic fabric. Lighting design was integral — a custom chandelier of 340 individual glass pieces creates the centrepiece of the main dining space.',
    result: 'Awarded Best New Restaurant Interior by the Scottish Design Awards 2023. Fully booked for 3 months post-opening.',
    tags: ['Interior', 'Restaurant', 'Heritage', 'Lighting'],
    awards: ['Scottish Design Awards — Best Interior 2023'],
  },
  {
    id: '6',
    slug: 'river-edge-masterplan',
    title: 'River Edge Masterplan',
    category: 'masterplan',
    location: { city: 'Guntur', country: 'India' },
    year: 2020,
    area: '85 acres',
    client: 'Private Developer (Competition)',
    status: 'unbuilt',
    featured: false,
    coverImage: '/images/projects/river-edge-cover.jpg',
    images: [
      '/images/projects/river-edge-1.jpg',
      '/images/projects/river-edge-2.jpg',
    ],
    brief: 'Competition entry for a 85-acre mixed-use riverside development along the Krishna river in Guntur district — integrating residential, commercial, and cultural programming with ecological sensitivity.',
    concept: 'The masterplan is organized around a series of "braided" public green corridors that mirror the seasonal braiding of the Krishna river. Development parcels are positioned between corridors, ensuring every resident is within 200m of green space.',
    narrative: 'The scheme integrates a flood-resilience strategy — buildings are elevated on pilotis in flood-prone zones, and the ground plane is designed as a permeable landscape that can accommodate seasonal inundation. This transforms a risk into a cultural event.',
    result: 'Competition entry. Placed second in an international field of 34 submissions.',
    tags: ['Masterplan', 'Riverside', 'Ecological', 'Mixed Use', 'Competition'],
  },
];

export const featuredProjects = projects.filter(p => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
