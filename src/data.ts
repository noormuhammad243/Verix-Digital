import {
  PenTool,
  Layout,
  Video,
  Share2,
  FileText,
  Search,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  Clock,
  Lightbulb,
  MessageSquare
} from 'lucide-react';

export const contactInfo = {
  whatsapp: "+923260382258",
  email: "m.abdullah.sep@gmail.com",
  address: "Renala Khurd - Okara",
  facebook: "https://www.facebook.com/share/1FZDj31UQP/",
  instagram: "#",
  linkedin: "#",
  youtube: "#"
};

export const skills = [
  { name: 'Canva Design', percent: 98 },
  { name: 'Logo Design', percent: 95 },
  { name: 'Video Editing', percent: 92 },
  { name: 'Social Media Design', percent: 96 },
  { name: 'Content Writing', percent: 94 },
  { name: 'Keyword Research', percent: 90 },
  { name: 'Digital Marketing Strategy', percent: 95 },
];

export const services = [
  { 
    id: 'canva', 
    title: 'Canva Design', 
    description: 'Professional and eye-catching designs using Canva for all your marketing needs.', 
    icon: Layout,
    features: ['Custom Templates', 'Social Media Graphics', 'Presentations', 'Print Ready Designs'],
    benefits: 'Enhance your visual identity rapidly with stunning graphics tailored to your brand.'
  },
  { 
    id: 'logo', 
    title: 'Logo Design', 
    description: 'Unique and memorable logo designs that perfectly represent your brand identity.', 
    icon: PenTool,
    features: ['Vector Formats', 'Multiple Revisions', 'Brand Guidelines', 'Typography Selection'],
    benefits: 'Establish trust and credibility instantly with a professional logo.'
  },
  { 
    id: 'video', 
    title: 'Video Editing', 
    description: 'Engaging and high-quality video editing for social media, YouTube, and promos.', 
    icon: Video,
    features: ['Color Grading', 'Motion Graphics', 'Audio Mixing', 'Transitions & Effects'],
    benefits: 'Capture your audience attention and significantly boost engagement rates.'
  },
  { 
    id: 'social', 
    title: 'Social Media Design', 
    description: 'Creative social media posts and banners that drive engagement and growth.', 
    icon: Share2,
    features: ['Platform-Specific Sizes', 'Grid Layouts', 'Carousel Posts', 'Story Designs'],
    benefits: 'Maintain a cohesive and attractive presence across all social channels.'
  },
  { 
    id: 'content', 
    title: 'Content Writing', 
    description: 'Compelling, SEO-optimized content that tells your story and converts readers.', 
    icon: FileText,
    features: ['Blog Posts', 'Website Copy', 'Product Descriptions', 'Ad Copy'],
    benefits: 'Improve your search rankings and turn visitors into loyal customers.'
  },
  { 
    id: 'keyword', 
    title: 'Keyword Research', 
    description: 'In-depth keyword research to boost your visibility and search rankings.', 
    icon: Search,
    features: ['Competitor Analysis', 'Long-Tail Keywords', 'Search Intent', 'Traffic Projections'],
    benefits: 'Target the right audience and maximize your organic search traffic.'
  }
];

export const reasonsToChooseUs = [
  { title: 'Creative Designs', icon: Lightbulb },
  { title: 'Fast Delivery', icon: Clock },
  { title: 'Affordable Pricing', icon: TrendingUp },
  { title: 'Client Satisfaction', icon: HeartHandshake },
  { title: 'Professional Communication', icon: MessageSquare },
  { title: 'Modern Marketing Strategies', icon: ShieldCheck }
];

export const caseStudies = [
  { 
    id: 1, 
    title: 'E-commerce Brand Revamp', 
    industry: 'Retail', 
    challenge: 'Low conversion rates and outdated brand identity.', 
    solution: 'Complete rebranding, modern social media strategy, and targeted content.', 
    result: '+150% Increase in Sales', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tech: ['Social Media Design', 'Logo Design', 'Content Writing']
  },
  { 
    id: 2, 
    title: 'Tech Startup Launch', 
    industry: 'Software', 
    challenge: 'Zero market presence and brand awareness.', 
    solution: 'Engaging video promos, SEO-driven content, and dynamic logo design.', 
    result: '10K+ Leads in 1st Month', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tech: ['Video Editing', 'Canva Design', 'Keyword Research']
  },
  { 
    id: 3, 
    title: 'Local Bakery Social Growth', 
    industry: 'Food & Beverage', 
    challenge: 'No social media engagement and low foot traffic.', 
    solution: 'Vibrant Canva designs and strategic social media management.', 
    result: '300% Engagement Boost', 
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    tech: ['Social Media Design', 'Content Writing']
  },
  { 
    id: 4, 
    title: 'Fitness App SEO Overhaul', 
    industry: 'Health & Fitness', 
    challenge: 'Poor organic traffic and invisible on search engines.', 
    solution: 'In-depth keyword research and complete content rewrite.', 
    result: 'Top 3 Ranking on Google', 
    image: 'https://images.unsplash.com/photo-1526506114881-807d9b4b0a43?auto=format&fit=crop&q=80&w=800',
    tech: ['Keyword Research', 'Content Writing']
  },
  { 
    id: 5, 
    title: 'Real Estate Agency Branding', 
    industry: 'Real Estate', 
    challenge: 'Inconsistent branding across physical and digital spaces.', 
    solution: 'New premium logo design and unified Canva templates.', 
    result: 'Brand Trust Increased', 
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    tech: ['Logo Design', 'Canva Design']
  },
  { 
    id: 6, 
    title: 'Event Management Promo', 
    industry: 'Events', 
    challenge: 'Low ticket sales for an upcoming major conference.', 
    solution: 'High-energy video editing and targeted social media ads.', 
    result: 'Sold Out in 2 Weeks', 
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
    tech: ['Video Editing', 'Social Media Design']
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO, BrightRetail',
    review: 'Verix Digital Expert completely transformed our online presence. The creative designs and marketing strategies resulted in a massive boost to our sales.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Founder, TechStart',
    review: 'The quality of the video editing and content writing was exceptional. They understood our brand vision perfectly and delivered beyond expectations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Manager, DailyBake',
    review: 'Fast delivery, affordable pricing, and brilliant communication. The Canva designs and social media posts made our brand stand out instantly.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  }
];
