export interface TimelineEntry {
  year: number;
  title: string;
  organization: string;
  description?: string;
  type: 'education' | 'work' | 'award' | 'milestone';
}

export const timeline: TimelineEntry[] = [
  {
    year: 2020,
    title: 'Completed M.Tech Architecture',
    organization: 'NIT Warangal, India',
    description: 'Specialization in Sustainable and Urban Design. Thesis on "Adaptive Reuse of Industrial Structures in Post-Industrial Indian Cities".',
    type: 'education',
  },
  {
    year: 2020,
    title: 'Junior Architect',
    organization: 'Studio Morphogenesis, Hyderabad',
    description: 'Joined as a junior architect working on residential and civic projects across Telangana and Andhra Pradesh. Led design on the Vernacular Reimagined cultural center in Vijayawada.',
    type: 'work',
  },
  {
    year: 2021,
    title: 'Relocated to Glasgow, UK',
    organization: 'NORD Architecture, Glasgow',
    description: 'Joined NORD Architecture\'s growing studio as a Designer. Rapidly adapted to UK planning systems while contributing to multiple award-shortlisted residential and civic projects.',
    type: 'milestone',
  },
  {
    year: 2022,
    title: 'Civic Skin Pavilion — Edinburgh Festival',
    organization: 'NORD Architecture / Edinburgh City Council',
    description: 'Led design on the temporary pavilion for Edinburgh Festival. The project reached 12,000 visitors and was subsequently donated to a Leith school as a permanent outdoor classroom.',
    type: 'work',
  },
  {
    year: 2022,
    title: 'IIID Award — Commercial Category',
    organization: 'Indian Institute of Interior Designers',
    description: 'Terrace Lattice, Hyderabad awarded at the IIID National Awards for excellence in climate-responsive commercial design.',
    type: 'award',
  },
  {
    year: 2023,
    title: 'Senior Designer',
    organization: 'NORD Architecture, Glasgow',
    description: 'Promoted to Senior Designer. Now leading design teams on complex residential and public sector projects, and mentoring junior staff.',
    type: 'work',
  },
  {
    year: 2023,
    title: 'Scottish Design Award — Best Interior',
    organization: 'Scottish Design Awards',
    description: 'Light Lattice Interiors receives Best Restaurant Interior award at the Scottish Design Awards.',
    type: 'award',
  },
  {
    year: 2024,
    title: 'Exploring India Transition',
    organization: 'Independent',
    description: 'Actively seeking architectural projects and collaborations across India. Particularly interested in residential, institutional, and cultural commissions in Andhra Pradesh, Telangana, and Karnataka.',
    type: 'milestone',
  },
];
