import React from 'react'
import { Building2, Target, Rocket, Users, Award, TrendingUp, CheckCircle, Briefcase, Lightbulb, Shield } from 'lucide-react'
import WhyChooseSection from '../components/WhyChooseSection'

const AboutUs = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Briefcase },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Success Rate", icon: TrendingUp }
  ]

  const values = [
    { title: "Integrity", description: "We maintain the highest ethical standards in every engagement", icon: Shield },
    { title: "Excellence", description: "Delivering quality solutions that exceed expectations", icon: Award },
    { title: "Innovation", description: "Embracing creative approaches to solve complex challenges", icon: Lightbulb },
    { title: "Partnership", description: "Building lasting relationships based on trust and collaboration", icon: Users }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://sc0.blr1.digitaloceanspaces.com/large/657281-e3b445bb-90b4-46e3-ae48-69716adff81a.jpg)'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/80 to-yellow-900/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">TRUSTED CONSULTING PARTNER</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              About Funds Catalyst
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Bridging Vision and Execution Through Strategic Excellence in Project Management, Government Tender Support, and NGO & CSR Funding
            </p>
            <div className="h-1 w-24 bg-yellow-500"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <Icon className="w-10 h-10 mx-auto mb-4 text-yellow-500" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-yellow-500"></div>
              <span className="text-yellow-600 font-semibold uppercase tracking-wide text-sm">Who We Are</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Bridges Between Purpose and Execution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Funds Catalyst, we are committed to building bridges between purpose and execution. From grassroots NGOs to established corporations, we empower organizations through expert consulting in project design, policy compliance, government scheme access, CSR collaboration, and capacity development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our multidisciplinary team brings decades of combined experience in development consulting, corporate social responsibility, government affairs, and project management—ensuring every engagement delivers measurable impact.
            </p>
            <div className="flex items-center gap-4">
              <Building2 className="w-12 h-12 text-yellow-500" />
              <div>
                <p className="font-semibold text-gray-900">Professional Consulting Services</p>
                <p className="text-sm text-gray-600">Tailored solutions for your organization</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-lg opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-500 rounded-lg opacity-10"></div>
              <div className="relative space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Project Management Excellence</h4>
                    <p className="text-sm text-gray-600">End-to-end project design and implementation support</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Government Tender Support</h4>
                    <p className="text-sm text-gray-600">Navigate complex tender processes with confidence</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">NGO & CSR Funding</h4>
                    <p className="text-sm text-gray-600">Access funding opportunities and compliance guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Goal Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-lg shadow-lg p-10 border-t-4 border-yellow-500">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-50 rounded-lg mb-6">
                <Target className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To catalyze impactful change by empowering NGOs, companies, and public institutions through strategic consulting, policy expertise, and project implementation support—bridging the gap between vision and execution.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We strive to offer customized, ethical, and scalable solutions that address real-world challenges across diverse sectors.
              </p>
            </div>

            {/* Goal Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-lg p-10 text-white border-t-4 border-yellow-500">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-500/20 rounded-lg mb-6">
                <Rocket className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                To become India's most trusted partner in the development and corporate social responsibility ecosystem, enabling transparent, efficient, and sustainable solutions that create measurable social and economic value.
              </p>
              <p className="text-gray-200 leading-relaxed">
                We aim to expand our footprint across all states, fostering long-term partnerships that prioritize impact, compliance, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-yellow-500"></div>
            <span className="text-yellow-600 font-semibold uppercase tracking-wide text-sm">Our Foundation</span>
            <div className="h-1 w-12 bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do and define our commitment to excellence</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div key={idx} className="group">
                <div className="bg-white rounded-lg shadow-md p-8 h-full border border-gray-200 hover:shadow-xl hover:border-yellow-500 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-50 rounded-lg mb-6 group-hover:bg-yellow-500 transition-colors">
                    <Icon className="w-6 h-6 text-yellow-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Journey Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-yellow-500"></div>
              <span className="text-yellow-400 font-semibold uppercase tracking-wide text-sm">Our Story</span>
              <div className="h-1 w-12 bg-yellow-500"></div>
            </div>
            <p className="text-xl text-gray-300">Milestones that shaped our success and commitment to excellence</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <img 
              src="./../src/assets/Roadmap.webp" 
              alt="Roadmap Funds Catalyst" 
              className="w-full lg:w-3/4 mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <WhyChooseSection />
    </div>
  )
}

export default AboutUs