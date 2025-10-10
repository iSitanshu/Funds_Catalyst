import {
  Building2,
  Handshake,
  FileText,
  TrendingUp,
  Users,
  Target,
  Shield,
  Briefcase, 
  IndianRupee, 
  CheckCircle2
} from "lucide-react";

const steps = [
    {
      num: "01",
      title: "First Meeting",
      desc: "Understand business, goals, and difficulties",
      icon: "🤝",
      details:
        "Meet with the customer to understand their business, goals, and difficulties.",
    },
    {
      num: "02",
      title: "Data Gathering",
      desc: "Financial accounts, market research, customer feedback",
      icon: "📊",
      details:
        "Request financial accounts, market research, customer feedback, and operational analytics.",
    },
    {
      num: "03",
      title: "SWOT Analysis",
      desc: "Comprehensive analysis of the client's business",
      icon: "🎯",
      details:
        "SWOT-analysis of the client's business strengths, weaknesses, opportunities, and threats.",
    },
    {
      num: "04",
      title: "Market Research",
      desc: "Industry insights, trends, and prospects",
      icon: "🔍",
      details:
        "Understand the industry landscape, emerging trends, and growth prospects.",
    },
    {
      num: "05",
      title: "Financial Analysis",
      desc: "Performance, profitability, and financial health",
      icon: "💰",
      details:
        "Assess the company's performance, profitability, and financial health using provided data.",
    },
    {
      num: "06",
      title: "Benchmarking",
      desc: "Compare against industry standards",
      icon: "📈",
      details:
        "Compare the client's performance against industry standards and competitors.",
    },
    {
      num: "07",
      title: "Find Opportunities",
      desc: "Growth, diversification, and expansion potential",
      icon: "🚀",
      details:
        "Analyse corporate growth, diversification, and expansion potential.",
    },
    {
      num: "08",
      title: "Risk Assessment",
      desc: "Identify implementation risks",
      icon: "⚠️",
      details: "Identify client implementation risks and potential challenges.",
    },
    {
      num: "09",
      title: "Strategic Recommendations",
      desc: "Report results and actionable advice",
      icon: "💡",
      details: "Report your results, analysis, and strategic recommendations.",
    },
    {
      num: "10",
      title: "Support & Follow-Up",
      desc: "Address queries and provide guidance",
      icon: "🤲",
      details: "Address client queries and concerns throughout implementation.",
    },
    {
      num: "11",
      title: "Measure & Evaluate",
      desc: "Set KPIs and track success",
      icon: "✅",
      details: "Help the customer set KPIs to evaluate strategy success.",
    },
    {
      num: "12",
      title: "Continuing Relationship",
      desc: "Loyalty, repeat business, referrals",
      icon: "🔄",
      details:
        "Engage continuously and provide additional services for ongoing success.",
    },
  ];


const capabilities = [
    "NGO Registration & Compliance Management",
    "CSR Strategy & Fund Facilitation",
    "Government Tender Identification & Execution",
    "DPR Writing & Project Design",
    "End-to-End Implementation Support",
];


const services = [
    {
      icon: Building2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNAW5cjPxATQVnsLei5aSdNhCnl84tzm6CA&s",
      title: "NGO Registration & Compliance",
      description:
        "Seamless registration under Section 8, Trust, Society with ongoing compliance support and expert guidance throughout the process.",
    },
    {
      icon: Handshake,
      image:
        "https://www.soundnlight.in/wp-content/uploads/2016/04/Anand_Mahindra_CSR_SLSV.jpg",
      title: "CSR Consultancy",
      description:
        "Strategic CSR planning, fund facilitation, and impact measurement for corporates to maximize their social impact and reputation.",
    },
    {
      icon: FileText,
      image:
        "https://media.gettyimages.com/id/583762158/photo/mumbai-politics-and-governance.jpg?s=1024x1024&w=gi&k=20&c=bTphIkkX02PIw5k626TrniyCkjs8cwQQAoDnQ3VHWfA=",
      title: "Government Tender Support",
      description:
        "Comprehensive tender identification, DPR writing, and bid management services for government projects to increase winning chances.",
    },
    {
      icon: TrendingUp,
      image:
        "https://give.do/blog/wp-content/uploads/2023/11/How-popular-is-fundraising-in-India-becoming.jpg",
      title: "Fundraising Strategy",
      description:
        "Diversified funding strategies connecting you with CSR, government, and private donors to secure sustainable financial support.",
    },
    {
      icon: Users,
      image: "https://space-india.com/wp-content/uploads/2023/12/image.jpg",
      title: "Project Execution",
      description:
        "End-to-end project management ensuring on-time, quality delivery across 20 states with expertise in handling complex projects.",
    },
    {
      icon: Target,
      image:
        "https://neuroject.com/wp-content/uploads/2025/02/Top-5-Megaprojects-in-India-Engineering-Marvels-You-Must-See-02-Neuroject-800x450.jpg",
      title: "Impact Assessment",
      description:
        "Data-driven impact measurement and reporting to showcase your social outcomes and demonstrate the effectiveness of your initiatives.",
    },
    {
      icon: Shield,
      image:
        "https://synergyindia.foundation/wp-content/uploads/2023/08/government-schemes-for-girl-child-education-in-India.jpg",
      title: "Legal & Regulatory Guidance",
      description:
        "Expert navigation of FCRA, 12A, 80G, and other critical compliance requirements to ensure legal and regulatory adherence.",
    },
  ];


  
  const impactStats = [
    {
      icon: CheckCircle2,
      value: 700,
      suffix: "+",
      label: "NGOs Supported",
      color: "from-primary to-primary-light",
    },
    {
      icon: Briefcase,
      value: 200,
      suffix: "+",
      label: "CSR & Government Projects Executed",
      color: "from-secondary to-secondary-light",
    },
    {
      icon: IndianRupee,
      value: 100,
      suffix: " Cr+",
      label: "Funding Facilitated",
      color: "from-primary to-secondary",
    },
  ];

export { steps, capabilities, services, impactStats };