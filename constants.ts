import { Megaphone, Zap, Globe, Cpu, Layers, Video } from 'lucide-react';

export const COMPANY_NAME = "SONO-AMP";

export const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Insights', href: '#insights' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 1,
    title: "Content Production",
    description: "High-impact visual storytelling tailored for global audiences across every screen.",
    icon: Video,
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "Digital Experience",
    description: "Immersive web and app ecosystems designed to convert and engage.",
    icon: Globe,
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "Strategic Amplification",
    description: "Data-driven media planning to ensure your voice is heard above the noise.",
    icon: Megaphone,
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    id: 4,
    title: "Creative Tech",
    description: "Leveraging AI and next-gen frameworks to build scalable brand infrastructures.",
    icon: Cpu,
    image: "https://picsum.photos/600/400?random=4"
  }
];

export const CLIENT_LOGOS = [
  "Global Tech", "Future Finance", "EcoEnergy", "Urban Wear", "StreamLine", "Nova Health"
];

export const FEATURED_WORK = [
  {
    id: 1,
    client: "Nebula Motors",
    project: "The Electric Future",
    category: "Campaign",
    image: "https://picsum.photos/800/600?random=10",
    size: "large"
  },
  {
    id: 2,
    client: "Vortex Gaming",
    project: "Level Up Launch",
    category: "Digital",
    image: "https://picsum.photos/800/600?random=11",
    size: "small"
  },
  {
    id: 3,
    client: "Pure Life",
    project: "Sustainability Report",
    category: "Print & Social",
    image: "https://picsum.photos/800/600?random=12",
    size: "small"
  },
  {
    id: 4,
    client: "Aero Space",
    project: "Mars 2030",
    category: "Film",
    image: "https://picsum.photos/800/600?random=13",
    size: "large"
  }
];

export const INSIGHTS_POSTS = [
  {
    id: 1,
    title: "The Future of AI in Creative Production",
    category: "Technology",
    date: "Oct 12, 2023",
    image: "https://picsum.photos/600/400?random=20",
    excerpt: "How generative models are reshaping the workflow of global design agencies without losing the human touch."
  },
  {
    id: 2,
    title: "Sustainable Branding: More Than Just Green",
    category: "Strategy",
    date: "Sep 28, 2023",
    image: "https://picsum.photos/600/400?random=21",
    excerpt: "Why modern consumers demand authenticity in eco-conscious messaging and how to deliver it."
  },
  {
    id: 3,
    title: "Navigating the Metaverse Marketing Crash",
    category: "Digital",
    date: "Sep 15, 2023",
    image: "https://picsum.photos/600/400?random=22",
    excerpt: "What went wrong, what survived, and where the real opportunities for immersive brand experiences lie today."
  }
];

export const JOB_OPENINGS = [
  {
    id: 1,
    role: "Senior Art Director",
    location: "New York / Hybrid",
    type: "Full-time",
    department: "Creative"
  },
  {
    id: 2,
    role: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    department: "Technology"
  },
  {
    id: 3,
    role: "Account Executive",
    location: "London",
    type: "Full-time",
    department: "Client Services"
  },
  {
    id: 4,
    role: "Motion Graphics Designer",
    location: "Los Angeles",
    type: "Contract",
    department: "Production"
  }
];