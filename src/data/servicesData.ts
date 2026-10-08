export interface ServiceTile {
  id: string
  title: string
  image: string
  description?: string
  badge?: string
}

export interface ServiceCategoryGroup {
  id: string
  categoryTitle: string
  titleGoldPart?: string
  titleAlign: 'left' | 'right'
  tiles: ServiceTile[]
}

export const servicesData: ServiceCategoryGroup[] = [
  {
    id: 'clean-detail',
    categoryTitle: 'Clean & ',
    titleGoldPart: 'Detail',
    titleAlign: 'left',
    tiles: [
      {
        id: 'cd-1',
        title: 'Car Wash',
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80',
        description: 'High-pressure foam wash and micro-fiber drying.',
      },
      {
        id: 'cd-2',
        title: 'Interior Detailing',
        image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fe?auto=format&fit=crop&w=800&q=80',
        description: 'Deep leather conditioning and interior sanitization.',
      },
      {
        id: 'cd-3',
        title: 'Exterior Polishing',
        image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80',
        description: 'Paint correction and mirror finish shine.',
      },
      {
        id: 'cd-4',
        title: 'Engine Detailing',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
        description: 'Safe engine bay degreasing and protective dressing.',
      },
    ],
  },
  {
    id: 'protection',
    categoryTitle: 'Protection',
    titleAlign: 'right',
    tiles: [
      {
        id: 'pr-1',
        title: 'Ceramic Coating',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
        description: '9H nano-ceramic hydrophobic surface protection.',
      },
      {
        id: 'pr-2',
        title: 'Paint Protection Film (PPF)',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
        description: 'Self-healing stone chip and scratch barrier film.',
      },
      {
        id: 'pr-3',
        title: 'Graphene Coating',
        image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80',
        description: 'Next-gen heat resistant matrix paint shield.',
      },
      {
        id: 'pr-4',
        title: 'Underbody Coating',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
        description: 'Anti-corrosion and acoustic dampening guard.',
      },
    ],
  },
  {
    id: 'customizations',
    categoryTitle: 'Customizations',
    titleAlign: 'left',
    tiles: [
      {
        id: 'cu-1',
        title: 'Car Wrapping',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
        description: 'Premium vinyl color wraps and accent styling.',
      },
      {
        id: 'cu-2',
        title: 'Alloy & Tyre Upgrades',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
        description: 'Forged wheel fitment and performance tyres.',
      },
      {
        id: 'cu-3',
        title: 'Audio & Lighting Upgrades',
        image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
        description: 'Hi-Fi acoustics and ambient LED custom lighting.',
      },
      {
        id: 'cu-4',
        title: 'Bespoke Interior Trims',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
        description: 'Custom leather stitching and alcantara paneling.',
      },
    ],
  },
  {
    id: 'repair-maintenance',
    categoryTitle: 'Repair & Maintenance',
    titleAlign: 'right',
    tiles: [
      {
        id: 'rm-1',
        title: 'Denting & Painting',
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
        description: 'Factory color matching and paintless dent removal.',
      },
      {
        id: 'rm-2',
        title: 'AC Service & Sanitize',
        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80',
        description: 'Evaporator cleaning and ozone bacterial disinfection.',
      },
      {
        id: 'rm-3',
        title: 'Periodic Maintenance',
        image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80',
        description: 'Full synthetic oil change and multi-point checkup.',
      },
      {
        id: 'rm-4',
        title: 'Brake & Suspension',
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
        description: 'Precision alignment, rotor resurfacing & pad swap.',
      },
    ],
  },
]
