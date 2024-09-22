import service1 from "../assets/test-4.webp";
import service2 from "../assets/marketing-campaign.jpg";
import service3 from "../assets/service2.webp";
import project1 from "../assets/sollo.webp";
import project2 from "../assets/hairbyarper.jpg";
import project3 from "../assets/Jubilant.png";
import profile1 from "../assets/profile1.jpeg";
import profile2 from "../assets/profile2.jpeg";
import profile3 from "../assets/profile3.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import profile4 from "../assets/profile4.jpg";
import profile5 from "../assets/profile5.jpg";
import profile6 from "../assets/profile6.jpeg";
import testimonial1 from "../assets/testimonial1.jpeg";
import testimonial2 from "../assets/testimonial2.jpeg";
import testimonial3 from "../assets/testimonial3.jpeg";
import testimonial4 from "../assets/testimonial4.jpeg";

export const LINKS = [
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Pricing", id: "pricing" },
  { name: "Team", id: "team" },
  { name: "Reviews", id: "reviews" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

export const ABOUT = {
  profileImages: [
    {
      src: about1,
      alt: "Creative Team",
      delay: 0.1,
    },
    {
      src: about2,
      alt: "Marketing Strategy",
      delay: 0.2,
    },
    {
      src: about3,
      alt: "Digital Campaign",
      delay: 0.3,
    },
  ],
  aboutUsText:
    "At Vacuum, we are a dynamic team of creative professionals, marketing experts, and digital strategists committed to elevating your brand and generating sales. We specialize in crafting innovative ad campaigns that drive engagement and deliver results for Digital creators, SMEs and StartUps.",
};

export const SERVICES = [
  {
    id: 1,
    title: "Social Media Management",
    content: "Tailored strategies to meet your unique business needs.",
    description:
      "Ultimately, this service empowers us to deliver data-driven marketing strategies that are laser-focused on achieving our clients' specific goals.",
    imgSrc: service1,
  },
  {
    id: 2,
    title: "Social Media Ads",
    content: "Optimize your campaigns for maximum reach and engagement.",
    description:
      "Ultimately, this service empowers us to deliver data-driven marketing strategies that are laser-focused on achieving our clients' specific goals.",
    imgSrc: service2,
  },
  {
    id: 3,
    title: "Customer Support",
    content: "Provide quick and apt responses and assitance to customers needs .",
    description:
      "Ultimately, this service empowers us to deliver data-driven marketing strategies that are laser-focused on achieving our clients' specific goals.",
    imgSrc: service3,
  },
];

export const PROJECTS = [
  {
    year: "2023",
    title: "Sollo",
    description: "How we furthered Their Crypto Wallet Adoption.",
    details:
      "Sollo approached us with a vision to make Crypto transaction seamless with their infrastructure. Our team worked closely with their marketers to develop and deploy a campaign strategy that have significantly enhanced their market share and product offerings.",
    imageUrl: project1,
    figures: {
      investment: "$200k",
      duration: "12 months",
      outcome: "200% ROI",
    },
  },
  {
    year: "2023",
    title: "HairbyArper",
    description: "How we doubled market growth.",
    details:
      "HairbyArper was looking to expand their online presence. We conducted comprehensive market research and developed a targeted marketing strategy that led to a substantial increase in their followers, ultimately doubling their growth within a year.",
    imageUrl: project2,
    figures: {
      investment: "$120k",
      duration: "9 months",
      outcome: "150% market growth",
    },
  },
  {
    year: "2023",
    title: "Jubilant",
    description: "How we built their Customers trust.",
    details:
      "Jubilant wanted to build credibility for their new startup that makes investing profitable. We designed a creative campaign that highlighted the unique features of their products, resulting in a significant boost in brand awareness and customer engagement.",
    imageUrl: project3,
    figures: {
      investment: "$90K",
      duration: "6 months",
      outcome: "300% increase in engagement",
    },
  },
];

export const PACKAGES = [
  {
    name: "Premium",
    price: "$25K",
    description:
      "This premium package offers comprehensive advertising solutions for large-scale campaigns.",
    services: [
      "Brand strategy development",
      "Comprehensive market analysis",
      "Creative campaign design",
      "Multi-channel media planning",
      "24/7 campaign management",
    ],
  },
  {
    name: "Standard",
    price: "$15K",
    description:
      "This package includes effective market research and strategic campaign development.",
    services: [
      "Brand strategy development",
      "Market research and analysis",
      "Creative campaign design",
      "Multi-channel media planning",
      "Weekly campaign updates",
    ],
  },
  {
    name: "Basic",
    price: "$10K",
    description:
      "This package offers essential advertising solutions for startups and small businesses.",
    services: [
      "Brand strategy development",
      "Basic market research and analysis",
      "Creative campaign design",
      "Social media planning",
      "Monthly campaign reviews",
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Emily Martinez",
    title: "Creative Director",
    image: profile1,
  },
  {
    name: "Janine Mensah",
    title: "Marketing Strategist",
    image: profile2,
  },
  {
    name: "James Carter",
    title: "Lead Graphic Designer",
    image: profile3,
  },
  {
    name: "Claire Dunes",
    title: "Social Media Manager",
    image: profile4,
  },
  {
    name: "James Okafor",
    title: "SEO Specialist",
    image: profile5,
  },
  {
    name: "Michael Turner",
    title: "Content Creator",
    image: profile6,
  },
];

export const TESTIMONIALS = [
  {
    text: "Working with Vacuum has transformed our marketing strategy. Their creative solutions and dedication are unmatched.",
    author: "Aminat Musa",
    title: "CEO, BrightFuture",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
    image: testimonial1,
  },
  {
    text: "The team at adCarrot is professional, innovative, and incredibly skilled. They have significantly improved our brand's online presence.",
    author: "David Williams",
    title: "CTO, TechSavvy",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    image: testimonial2,
  },
  {
    text: "Vacuum's approach to marketing is both strategic and creative. They understand our needs and deliver outstanding results, truly filling vacuum.",
    author: "Adedokun Lade",
    title: "Marketing Director, FinancePro",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
    image: testimonial3,
  },
  {
    text: "The quality of work and the level of expertise at adCarrot is exceptional. We highly recommend their services. Overall happy!",
    author: "Vinicius Alex",
    title: "COO, StartSmart",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
    image: testimonial4,
  },
];

export const FAQS = [
  {
    question: "What services does Vacuum offer?",
    answer:
      "Vacuum offers a wide range of services including personalized marketing plans, flexible campaign scheduling, online consulting sessions, and more. Our services are designed to elevate your brand and drive engagement.",
  },
  {
    question: "How can Vacuum help my business grow?",
    answer:
      "adCarrot specializes in creating data-driven marketing strategies that are tailored to your unique business needs. Our team of experts works closely with you to optimize your campaigns and achieve your business goals.",
  },
  {
    question: "Can Vacuum handle social media management?",
    answer:
      "Yes, Vacuum offers comprehensive social media management services. We create engaging content, manage your social media accounts, and run targeted ad campaigns to increase your online presence.",
  },
  {
    question: "How does Vacuum measure campaign success?",
    answer:
      "We use advanced analytics and tracking tools to measure the success of your campaigns. Our team provides detailed reports and insights to help you understand the performance and ROI of your marketing efforts.",
  },
  {
    question: "What is the process for getting started with Vacuum?",
    answer:
      "Getting started with Vacuum is easy. Simply contact us to schedule a meeting. We'll discuss your business needs, develop a customized marketing plan, and get your campaigns up and running in no time.",
  },
  {
    question:
      "Is there customer support available for troubleshooting or customization assistance?",
    answer:
      "Yes, Vacuum offers dedicated customer support to assist you with any questions or issues. Our support team is available to help you with troubleshooting and provide guidance on customizing your marketing strategies.",
  },
  {
    question:
      "Is there money back guarantee?",
    answer:
      "Yes, Vacuum offers outstanding result which many of our Clients speaks and refer others to us,but in a situation where there is issues in our delivery. We offer a reasonable percentage back.",
  },
];

export const FAQ_DESCRIPTION =
  "Explore quick answers to common queries in our FAQ section. Whether it's about our services, policies, or more, find the information you need. Need further assistance? Contact our customer support for personalized help!";
