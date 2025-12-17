import img1a from "../assets/1a.png";
import img1b from "../assets/1b.png";
import img1c from "../assets/1c.png";
import img1d from "../assets/1d.png";
import img1e from "../assets/1e.png";
import img1f from "../assets/1f.png";

export const projectsData = [
  {
    id: 1,
    title: "College-Seminar-Booking",
    category: "Booking System",
    image: img1a, 
    description: "A high-performance Shopify store for an Indian D2C brand. Integrated with Razorpay, Shiprocket for logistics, and WhatsApp API for support.",
    tags: ["React", "MySQL", "Express"],
    github: "https://github.com/RiteshD2005/EDI_Sem_1.git",
    live: "",
    gallery: [
      img1a,
      img1b,
      img1c,
      img1d,
      img1e,
      img1f,
      
    ]
  },
  {
    id: 2,
    title: "Fintech Bharat Dashboard",
    category: "SaaS Application",
    image: "https://placehold.co/800x600/0f172a/38bdf8?text=Fintech+Dash",
    description: "Real-time stock market analysis dashboard for Indian traders. Uses NSE/BSE APIs. Built with React and Node.js with secure JWT authentication.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/fintech",
    live: "https://fintech-demo.com",
    gallery: [
      "https://placehold.co/800x600/0f172a/38bdf8?text=Main+Dash",
      "https://placehold.co/800x600/064e3b/34d399?text=Mobile+View"
    ]
  }
];  