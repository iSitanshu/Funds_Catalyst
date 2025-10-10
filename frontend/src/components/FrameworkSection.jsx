import React, { useState } from "react";
import {
  ChevronRight,
  Zap,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { steps } from "../content"

export default function FrameworkDisplay() {
  const [expandedStep, setExpandedStep] = useState(null);

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
