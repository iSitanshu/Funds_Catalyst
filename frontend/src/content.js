import {
  Building2,
  Handshake,
  FileText,
  Target,
  Shield,
  Briefcase,
  IndianRupee,
  CheckCircle2,
  TrendingUp,
  Users,
  Globe,
  School,
  Sprout
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
  "Empanelled with NACOF, Govt. of India",
  "Partnering in agriculture development programs",
  "Collaborating with farmer cooperatives nationwide",
  "Recognized for authenticity and trust",
  "Driving sustainable rural growth initiatives",
];

const services = [
  {
    icon: Building2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNAW5cjPxATQVnsLei5aSdNhCnl84tzm6CA&s",
    title: "NGO Registration & Compliance",
    description: "Seamless registration under Section 8, Trust, Society with ongoing compliance support and expert guidance throughout the process.",
    largeDescription: "We provide end-to-end assistance in NGO formation under Section 8 Companies, Trusts, and Societies. Our experts help you understand the legal structures, prepare documentation, and file for registration. Post-registration, we ensure continued compliance with government regulations such as 12A, 80G, and FCRA to maintain your credibility and enable tax exemptions for donors.",
    keyword: "ngo-registration-&-compliance"
  },
  {
    icon: Handshake,
    image: "https://www.soundnlight.in/wp-content/uploads/2016/04/Anand_Mahindra_CSR_SLSV.jpg",
    title: "CSR Consultancy",
    description: "Strategic CSR planning, fund facilitation, and impact measurement for corporates to maximize their social impact and reputation.",
    largeDescription: "Our CSR consulting services empower companies to design and execute impactful CSR initiatives. We identify the right NGO partners, align projects with CSR mandates under Companies Act 2013, manage fund disbursement, and provide monitoring & evaluation frameworks to measure and report impact effectively.",
    keyword: "csr-consultancy"
  },
  {
    icon: FileText,
    image: "https://media.gettyimages.com/id/583762158/photo/mumbai-politics-and-governance.jpg?s=1024x1024&w=gi&k=20&c=bTphIkkX02PIw5k626TrniyCkjs8cwQQAoDnQ3VHWfA=",
    title: "Government Tender Support",
    description: "Comprehensive tender identification, DPR writing, and bid management services for government projects to increase winning chances.",
    largeDescription: "We specialize in helping organizations navigate the complex world of government tenders. From identifying suitable tenders, drafting winning Detailed Project Reports (DPRs), to managing the bidding process—we improve your chances of securing high-value public sector contracts through expert consultancy and documentation.",
    keyword: "government-tender-support"
  },
  {
    icon: TrendingUp,
    image: "https://give.do/blog/wp-content/uploads/2023/11/How-popular-is-fundraising-in-India-becoming.jpg",
    title: "Fundraising Strategy",
    description: "Diversified funding strategies connecting you with CSR, government, and private donors to secure sustainable financial support.",
    largeDescription: "Our team crafts customized fundraising strategies tailored to your mission. We map donor landscapes, write compelling grant proposals, establish donor engagement plans, and help you diversify funding through CSR partnerships, crowdfunding, and institutional grants to build long-term sustainability.",
    keyword: "fundraising-strategy"
  },
  {
    icon: Users,
    image: "https://space-india.com/wp-content/uploads/2023/12/image.jpg",
    title: "Project Execution and Management",
    description: "End-to-end project management ensuring on-time, quality delivery across 20 states with expertise in handling complex projects.",
    largeDescription: "We provide professional project execution support including mobilization, field deployment, quality control, and reporting. Leveraging local networks and experienced teams, we ensure your initiatives—across sectors like health, education, and livelihood—are implemented efficiently and create measurable impact on ground.",
    keyword: "project-execution"
  },
  {
    icon: Target,
    image: "https://neuroject.com/wp-content/uploads/2025/02/Top-5-Megaprojects-in-India-Engineering-Marvels-You-Must-See-02-Neuroject-800x450.jpg",
    title: "Impact Assessment",
    description: "Data-driven impact measurement and reporting to showcase your social outcomes and demonstrate the effectiveness of your initiatives.",
    largeDescription: "Our impact assessments utilize mixed-method evaluations combining qualitative and quantitative data. We design KPIs, conduct baseline & endline studies, and produce reports that validate your project’s effectiveness—helping you communicate outcomes transparently to stakeholders and funders.",
    keyword: "impact-assessment"
  },
  {
    icon: Shield,
    image: "https://synergyindia.foundation/wp-content/uploads/2023/08/government-schemes-for-girl-child-education-in-India.jpg",
    title: "Legal & Regulatory Guidance",
    description: "Expert navigation of FCRA, 12A, 80G, and other critical compliance requirements to ensure legal and regulatory adherence.",
    largeDescription: "Stay compliant with evolving legal frameworks governing NGOs and CSR activities. We assist with registration under FCRA, 12A, 80G, PAN/TAN, as well as periodic filings and audits. Our legal experts ensure you avoid penalties and maintain eligibility for domestic and foreign funding.",
    keyword: "legal-&-regulatory-guidance"
  }
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

const statsData = [
  {
    title: "2.5M+",
    subtitle: "Lives Impacted",
    description: "Through education, healthcare, and community programs",
    icon: TrendingUp,
    color: "blue",
  },
  {
    title: "45K+",
    subtitle: "Active Volunteers",
    description: "Dedicated individuals driving change daily",
    icon: Users,
    color: "green",
  },
  {
    title: "28 States",
    subtitle: "Pan-India Coverage",
    description: "Reaching communities in remote areas",
    icon: Globe,
    color: "yellow",
  },
];


const impactData = [
  { amount: "₹500", text: "Provides books & supplies for 5 students" },
  { amount: "₹1,000", text: "Medical camp for 50 people" },
  { amount: "₹2,500", text: "Skill training for 2 women" },
  { amount: "₹5,000", text: "Building supplies for 1 school room" },
];




const projects = [
  {
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800",
    title: "Shatavari Plantation & Distribution",
    description: "Government-supported cultivation and distribution of 1,00,000 Shatavari plants under NMPB AYUSH scheme for NGOs, farmers, and rural communities.",
    keyword: "shatavari-plantation",
    fullDetails: {
      introduction: "The Ministry of AYUSH under the National Medicinal Plant Board (NMPB) has launched the Central Sector Scheme for Conservation, Development, and Sustainable Management of Medicinal Plants. This scheme offers funding and government support for Shatavari Plantation & Distribution Project.",
      sections: [
        {
          title: "What is Shatavari Plantation Project?",
          content: [
            "The government supports the cultivation and distribution of 1,00,000 Shatavari plants to NGOs, farmers, SHGs, Panchayats, Schools, Ayurvedic institutions, and rural communities under the NMPB AYUSH scheme."
          ]
        },
        {
          title: "Why Shatavari Cultivation?",
          content: [
            "Top Ayurvedic medicinal plant for women's health, fertility, and immunity",
            "High demand in Ayurvedic medicines, nutraceuticals, and herbal pharmaceutical companies",
            "Profitable option for rural farmers and tribal communities"
          ]
        },
        {
          title: "Project Budget",
          content: [
            "The Shatavari Plantation Project is designed to run over a period of three years.",
            "Total project cost: ₹18,00,000 (covers plantation activities, training, monitoring, and management)",
            "Miscellaneous cost: ₹90,000 (5% for unforeseen expenses)",
            "Overall budget required: ₹18,90,000"
          ]
        },
        {
          title: "Implementation Process",
          content: [
            "Online Registration & Empanelment on AYUSH–NMPB Portal",
            "DPR (Project Report) Preparation including land details, map, plantation layout",
            "Submission to State Medicinal Plant Board (SMPB) for review",
            "Forwarding to National Medicinal Plant Board (NMPB) for central approval",
            "Evaluation by Project Screening Committee (PSC) and Standing Finance Committee (SFC)",
            "Project Implementation and plantation begins",
            "Monitoring & Online Reporting with photos and progress updates"
          ]
        }
      ],
      benefits: [
        "Government funding support of ₹18,90,000",
        "Promotes herbal farming and rural employment",
        "Supports women's health initiatives",
        "Creates sustainable income for farmers",
        "Contributes to India's medicinal plant mission"
      ],
      eligibility: [
        "NGOs, Trusts, Farmer Producer Companies (FPCs)",
        "Schools, Colleges, Ayurvedic Universities",
        "Panchayat Samitis, Gram Sabhas, Women SHGs",
        "CSR Foundations & Herbal Training Institutes"
      ],
      support: [
        "DPR Preparation & Budget Planning",
        "AYUSH–NMPB Portal Registration & Empanelment",
        "Proposal Submission to SMPB & NMPB",
        "Documentation, Approval & Fund Assistance",
        "Implementation Support – Plantation & Reporting",
        "Awareness Programmes for Farmers & Communities"
      ]
    }
  },
  {
    icon: School,
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800",
    title: "School Herbal Garden (500 sq. m.)",
    description: "Establishment of Aushadh Vatika in schools with 10-15 Ayurvedic plants like Shatavari, Tulsi, Giloy, Brahmi to promote herbal education among students.",
    keyword: "school-herbal-garden",
    fullDetails: {
      introduction: "To promote Ayurvedic medicinal plants awareness and education, the government supports the setup of Herbal Gardens (Aushadh Vatika) in educational institutions under the NMPB AYUSH scheme.",
      sections: [
        {
          title: "Project Overview",
          content: [
            "Plantation of 10–15 Ayurvedic medicinal plants including Shatavari, Tulsi, Giloy, Brahmi, Neem, Aloe Vera",
            "Students learn about Ayurveda, plant-based healing, and herbal farming",
            "Creates awareness about traditional medicine and sustainable practices"
          ]
        },
        {
          title: "Financial Assistance",
          content: [
            "₹25,000 for establishment (Year 1)",
            "₹7,000 per year for maintenance (Next 4 years)",
            "Total support over 5 years: ₹53,000"
          ]
        },
        {
          title: "Garden Components",
          content: [
            "Plant beds with variety of medicinal plants",
            "Irrigation system for proper water management",
            "Signboards with plant information and benefits",
            "Walking paths for student access",
            "Educational materials and documentation"
          ]
        },
        {
          title: "Implementation Steps",
          content: [
            "School registration on AYUSH–NMPB Portal",
            "Site selection and layout planning (500 sq. m.)",
            "DPR preparation with plant list and budget",
            "SMPB and NMPB approval process",
            "Garden establishment with plant procurement",
            "Training for teachers and students",
            "Regular maintenance and monitoring"
          ]
        }
      ],
      benefits: [
        "Hands-on learning about Ayurvedic plants",
        "Environmental education and awareness",
        "Promotes sustainable agriculture practices",
        "Creates green spaces in educational institutions",
        "Government financial support for 5 years"
      ],
      eligibility: [
        "Government and Private Schools",
        "Educational Institutions with available land",
        "Schools committed to environmental education",
        "Institutions with basic maintenance capabilities"
      ],
      support: [
        "Garden layout design and planning",
        "Plant selection and procurement guidance",
        "DPR preparation for NMPB approval",
        "Training for teachers and maintenance staff",
        "Documentation and reporting assistance",
        "Ongoing technical support"
      ]
    }
  },
  {
    icon: Building2,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800",
    title: "Institutional AYUSH Van (Per Hectare)",
    description: "Development of comprehensive herbal gardens in universities, hospitals, and public spaces with complete infrastructure including pathways and documentation.",
    keyword: "institutional-ayush-van",
    fullDetails: {
      introduction: "The Institutional AYUSH Van project supports the establishment of comprehensive herbal gardens in Universities, AYUSH Colleges, Hospitals, Panchayat Lands, and Public Parks. This initiative creates large-scale medicinal plant gardens with complete infrastructure and documentation.",
      sections: [
        {
          title: "Project Scope",
          content: [
            "Set up in Universities, AYUSH Colleges, Hospitals, Panchayat Lands, Public Parks",
            "Includes pathways, plant beds, irrigation system, signboards, and comprehensive documentation",
            "Showcases wide variety of medicinal plants with educational information",
            "Creates research and conservation hubs for medicinal plants"
          ]
        },
        {
          title: "Financial Assistance",
          content: [
            "₹3,00,000 per hectare for establishment (Year 1)",
            "₹60,000 per hectare per year for maintenance (Next 4 years)",
            "Total support over 5 years: ₹5,40,000 per hectare"
          ]
        },
        {
          title: "Infrastructure Components",
          content: [
            "Organized plant beds with taxonomic arrangement",
            "Walking pathways for visitors and researchers",
            "Drip irrigation or sprinkler system",
            "Informational signboards for each plant species",
            "Seating areas and viewing platforms",
            "Boundary fencing and security measures",
            "Documentation center with plant database"
          ]
        },
        {
          title: "Implementation Process",
          content: [
            "Institution registration and empanelment",
            "Land identification and survey (minimum 1 hectare)",
            "Detailed layout design and plant species selection",
            "DPR preparation with cost estimates",
            "State and national level approvals",
            "Infrastructure development and plant procurement",
            "Garden establishment and documentation",
            "Regular monitoring and public access management"
          ]
        }
      ],
      benefits: [
        "Creates center for medicinal plant research",
        "Public education and awareness platform",
        "Conservation of rare and endangered species",
        "Resource for Ayurvedic students and practitioners",
        "Substantial government funding support",
        "Long-term maintenance assistance"
      ],
      eligibility: [
        "Universities and Ayurvedic Colleges",
        "Government and Private Hospitals",
        "Panchayat Bodies with available land",
        "Public Parks and Botanical Gardens",
        "Research Institutes focusing on medicinal plants",
        "CSR Organizations with land availability"
      ],
      support: [
        "Complete DPR preparation and planning",
        "Landscape design and infrastructure planning",
        "Plant species selection and sourcing",
        "AYUSH-NMPB portal documentation",
        "Approval process facilitation",
        "Implementation monitoring and support",
        "Training for maintenance staff",
        "Digital documentation systems"
      ]
    }
  }
];

const projectsOverview = {
  mainTitle: "Our Work",
  mainDescription: "Supporting Ayurveda promotion, medicinal plant awareness, and sustainable rural development through government-backed initiatives under the National Medicinal Plant Board (NMPB).",
  schemes: [
    "Central Sector Scheme – Ministry of AYUSH",
    "National Medicinal Plant Board (NMPB) supported",
    "Complete funding and government support",
    "For NGOs, Farmers, Schools, Ayurvedic Institutes & CSR Organisations"
  ]
};


export { steps, capabilities, services, impactStats, impactData, statsData, projects, projectsOverview };