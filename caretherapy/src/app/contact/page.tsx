import "../globals.css";
import Image from "next/image";
import {MapPin, Mail, Phone} from 'lucide-react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us"
}

export default function ContactUs() {
  return (
      <section className="">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl/tight sm:text-5xl/tight font-bold text-gray-900">
              Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-600 via-sky-700 to-blue-900">CARE Therapy</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              {"Whether you\'re ready to book or just have a question \— we\'re here for you."}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Image */}
            <div className="rounded-xl overflow-hidden shadow-sm">
              <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1170&auto=format&fit=crop" width={1000} height={600} alt="Contact CARE Therapy" className="w-full h-full object-cover"/>
            </div>

            {/* Right Column - Contact Details */}
            <div className="flex flex-col gap-10">
              {/* Locations */}
              <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Servicing Area</h2>
                <div className="flex items-start gap-4">
                  <MapPin/>
                  <div className="text-gray-700">
                    <p>Pretoria</p>
                    <p>Johannesburg</p>
                    <p>Greater Gauteng Region</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail/>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:caretherapysa@gmail.com" className="text-base font-medium text-gray-900 underline hover:text-blue-700">
                      caretherapysa@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone/>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:+27797908846" className="text-base font-medium text-gray-900 underline hover:text-teal-600">
                      +27 79 790 8846
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

