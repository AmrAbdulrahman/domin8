export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Muhammad Rahman',
    role: 'Co-Founder & CRO',
    image: '/team/muhammad-rahman.webp',
  },
  {
    name: 'Amr Abdullah',
    role: 'Co-Founder & CEO',
    image: '/team/amr-abdullah.webp',
    linkedinUrl: 'https://www.linkedin.com/in/amrmabdulrahman/',
  },
  {
    name: 'Abdul Miah',
    role: 'Co-Founder & CFO',
    image: '/team/abdul-miah.webp',
  },
];
