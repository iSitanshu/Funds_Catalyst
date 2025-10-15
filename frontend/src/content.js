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
  Globe
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
    title: "Project Execution",
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

const project = [
  {
    icon: Building2,
    image: "https://sc0.blr1.digitaloceanspaces.com/large/657281-e3b445bb-90b4-46e3-ae48-69716adff81a.jpg",
    title: "Project Management Consulting",
    description: "Comprehensive project planning, execution, and monitoring to ensure your projects are delivered on time, within scope, and on budget. Our consultants apply proven frameworks like Agile, PRINCE2, and PMBOK.",
    largeDescription: "We offer end-to-end project management consulting using globally accepted methodologies like PMBOK, Agile, and PRINCE2. Our services include project scoping, scheduling, risk management, resource planning, stakeholder coordination, and monitoring & evaluation. We ensure transparency, accountability, and performance across every project stage.",
    keyword: "project-management-consulting"
  },
  {
    icon: Building2,
    image: "https://media.gettyimages.com/id/1198193345/photo/proud-indian-ceo-posing-with-smiling-company-staff-in-office.jpg?s=612x612&w=gi&k=20&c=FW3PnsR_r2oU_0XsXnwj0Q8v9Yjk49NChXgWL5DMruc=",
    title: "CRF Funding Assistance",
    description: "Expert guidance in applying for Central Road Fund (CRF) financing. We help you prepare proposals, ensure compliance with government norms, and streamline the disbursement process.",
    largeDescription: "We support infrastructure development organizations in accessing Central Road Fund (CRF) financing. From feasibility reports and proposal preparation to regulatory compliance and follow-up with ministries, our team ensures smooth navigation of CRF guidelines, boosting your project's chances of approval and timely fund release.",
    keyword: "crf-funding-assistance"
  },
  {
    icon: Building2,
    image: "https://agiindia.com/wp-content/uploads/2020/09/Top-Five-Infrastructure-Projects-in-India.png",
    title: "Government Tender Consulting",
    description: "Stay ahead in the competitive bidding process. Our team identifies relevant tenders, prepares accurate documentation, and improves your success rate in securing government projects.",
    largeDescription: "Maximize your chances in public procurement with our expert tender consulting. We analyze tender opportunities, prepare essential technical and financial documents, coordinate site visits, and assist during pre-bid meetings. With a high win rate across infrastructure and social sector tenders, we are your trusted partner for public contracts.",
    keyword: "government-tender-consulting"
  },
  {
    icon: Building2,
    image: "https://via.placeholder.com/100x100?text=NGO",
    title: "NGO & Non-Profit Advisory",
    description: "Supporting NGOs with strategy, funding applications, and regulatory compliance. We help build sustainable models that attract donors and drive long-term social impact.",
    largeDescription: "From mission clarity and governance structuring to fundraising and donor communications, we offer holistic advisory services to NGOs. Our team helps set up operational frameworks, align activities with SDGs, and build transparent processes that enhance donor confidence and drive measurable change.",
    keyword: "ngo-&-non-profit-advisory"
  },
  {
    icon: Building2,
    image: "https://via.placeholder.com/100x100?text=Strategy",
    title: "Strategic Planning & Feasibility",
    description: "From feasibility studies to strategic roadmaps, our consultancy helps organizations assess risks, explore opportunities, and define measurable goals to fuel growth and resilience.",
    largeDescription: "We conduct in-depth feasibility assessments that examine technical, financial, and social viability of your initiatives. Our strategic planning team helps you build practical roadmaps, define KPIs, allocate resources effectively, and make data-informed decisions to scale with confidence and impact.",
    keyword: "strategic-planning-&-feasibility"
  },
  {
    icon: Building2,
    image: "https://via.placeholder.com/100x100?text=Training",
    title: "Capacity Building & Training",
    description: "Tailored training programs for teams in project management, compliance, and operations. Equip your staff with the right tools and methodologies for efficient execution.",
    largeDescription: "We design and deliver customized capacity-building programs across domains like monitoring & evaluation, CSR compliance, field operations, and communication. Our modules are interactive, practical, and led by experienced trainers to upskill your team and strengthen your organizational capacity.",
    keyword: "capacity-building-&-training"
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

export { steps, capabilities, services, impactStats, impactData, statsData, project };