import React, { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Headphones
} from 'lucide-react'
import NewsLetterSection from '../components/NewsLetterSection'
import ConsultancyBooking from './ConsultancyBooking'

// Contact Info Component
export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'Our Address',
      content: '123 Catalyst Street, Innovation City, India',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      content: [
        { label: 'Landline', value: '+91 1234567' },
        { label: 'Mobile', value: '+91 1234567890' },
        { label: 'Mobile', value: '+91 9876543210' }
      ],
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'info@fundscatalyst.com',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: '10:00 AM – 07:00 PM',
      subtitle: 'Monday to Saturday',
      color: 'bg-yellow-50 text-yellow-600'
    }
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactDetails.map((detail, idx) => {
        const Icon = detail.icon
        return (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12 ${detail.color} rounded-lg mb-4`}
            >
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {detail.title}
            </h3>
            {Array.isArray(detail.content) ? (
              <div className="space-y-2">
                {detail.content.map((item, i) => (
                  <div key={i}>
                    <p className="text-xs text-gray-500 uppercase">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-700 font-medium">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-700">{detail.content}</p>
                {detail.subtitle && (
                  <p className="text-xs text-gray-500 mt-1">{detail.subtitle}</p>
                )}
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

// Customer Support Component
export const CustomerSupport = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-8 lg:p-10 border-t-4 border-yellow-500">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 bg-yellow-500/20 rounded-lg flex items-center justify-center">
          <Headphones className="w-7 h-7 text-yellow-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Customer Support</h3>
          <p className="text-gray-300 text-sm">
            We’re here to help with refunds, cancellations, or any inquiries. Reach out!
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg border border-white/10">
          <Mail className="w-5 h-5 text-yellow-400 mt-1" />
          <div>
            <p className="text-xs text-gray-400 uppercase mb-1">Email Support</p>
            <a
              href="mailto:info@fundscatalyst.com"
              className="text-white font-medium hover:text-yellow-400 transition"
            >
              info@fundscatalyst.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg border border-white/10">
          <Phone className="w-5 h-5 text-yellow-400 mt-1" />
          <div>
            <p className="text-xs text-gray-400 uppercase mb-1">Phone Support</p>
            <div className="text-white space-y-1">
              <p>+91 1234567890</p>
              <p>+91 9876543210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Contact Us Page
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 relative z-0">
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <div className="inline-block mb-4 px-4 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
            <span className="text-yellow-400 text-sm font-semibold">GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Have questions or need assistance? We’re here to help.
          </p>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 z-10 relative mb-20">
        <ContactInfo />
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <ConsultancyBooking />

          {/* Why Contact + Support */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Expert Consultation',
                    desc: 'Professional advice on project management and funding.'
                  },
                  {
                    title: 'Government Tender Support',
                    desc: 'Help navigating tender processes.'
                  },
                  {
                    title: 'NGO & CSR Funding',
                    desc: 'Access funding and compliance assistance.'
                  },
                  {
                    title: '24-Hour Response Time',
                    desc: 'Quick, reliable support for all queries.'
                  }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <CustomerSupport />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetterSection />
    </div>
  )
}

export default ContactUs
