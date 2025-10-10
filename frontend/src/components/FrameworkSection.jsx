import React, { useState } from "react";
import {
  ChevronRight,
  Zap,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function FrameworkDisplay() {
  const [expandedStep, setExpandedStep] = useState(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Our Process
          </h1>
          <p className="text-slate-300 text-lg">
            12-Step Framework for Strategic Excellence
          </p>
        </div>

        {/* Timeline View */}

        <div className="space-y-3">
          {steps.map((step, idx) => (
            <div key={idx}>
              <button
                onClick={() =>
                  setExpandedStep(expandedStep === idx ? null : idx)
                }
                className="w-full text-left group"
              >
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 p-4 rounded-lg transition-all cursor-pointer border border-slate-600 hover:border-blue-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{step.icon}</div>
                      <div>
                        <div className="font-bold text-white text-sm">
                          {step.num}. {step.title}
                        </div>
                        <div className="text-slate-300 text-xs">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`text-blue-400 transition-transform ${
                        expandedStep === idx ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>
              {expandedStep === idx && (
                <div className="bg-slate-700 bg-opacity-50 border-l-2 border-blue-500 p-4 mt-1 rounded text-slate-200 text-sm">
                  {step.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
