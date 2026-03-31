export interface Service {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon?: string;
}

export const services: Service[] = [
  {
    id: 'architectural-design',
    number: '01',
    name: 'Architectural Design',
    tagline: 'From first sketch to final brick.',
    description: 'Full-spectrum architectural services from early concept through to technical delivery. Whether you need a complete design package for a new residence or a thoughtful extension to an existing structure, every project begins with deep listening and ends with something that feels inevitable.',
    deliverables: [
      'Concept design and feasibility studies',
      'Schematic design and design development',
      'Client presentation packages with 3D visualizations',
      'Technical drawings and construction documentation',
      'BIM modeling in Revit',
      'Coordination with structural and MEP consultants',
      'Planning application support',
    ],
  },
  {
    id: 'interior-architecture',
    number: '02',
    name: 'Interior Architecture',
    tagline: 'Spatial experiences that provoke and comfort.',
    description: 'Interior architecture is architecture conducted at the scale of the human body — where material, light, and proportion determine how a space feels. This service goes beyond decoration to address the structural and experiential logic of interiors, from high-end residential to commercial dining and retail.',
    deliverables: [
      'Space planning and interior concept design',
      'Material, finish, and texture schedules',
      'Furniture layout and FF&E specification',
      'Custom joinery and millwork design',
      'Lighting design and coordination',
      'Sourcing and procurement guidance',
      'Site visits and contractor coordination',
    ],
  },
  {
    id: 'urban-master-planning',
    number: '03',
    name: 'Urban & Master Planning',
    tagline: 'Thinking at the scale of the city.',
    description: 'Large-scale planning projects that consider not just buildings, but the spaces between them — streets, parks, connections, and communities. With experience in both European and South Asian urban contexts, this service brings a globally informed perspective to India\'s rapidly growing cities.',
    deliverables: [
      'Site analysis and contextual research',
      'Urban design frameworks and masterplan concepts',
      'Zoning and regulatory analysis',
      'Phasing strategies for development',
      'Masterplan visualizations and renders',
      'Public realm and landscape design guidance',
      'Stakeholder presentation material',
    ],
  },
  {
    id: 'design-consultation',
    number: '04',
    name: 'Design Consultation',
    tagline: 'An international perspective for your project.',
    description: 'A focused advisory service for developers, project managers, and architects who want an independent design eye on their project. Drawing on experience across UK and Indian projects, this service is particularly valuable for Indian developers seeking international design standards, or for design reviews at key project stages.',
    deliverables: [
      'Project review and design critique sessions',
      'Schematic design alternatives and directions',
      'Sustainability and passive design advisory',
      'Material and specification review',
      'Value engineering from a design perspective',
      'Report with recommendations and action items',
    ],
  },
];
