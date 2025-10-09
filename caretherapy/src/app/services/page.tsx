import "../globals.css";
import Link from "next/link";
import {Check} from 'lucide-react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services"
}

const services = [
  {
    title: "Start Here – Intro Session",
    description: "Once off session.",
    features: [
      "Personalised assessment",
      "Tailored exercise/stretch trial session",
      "Recommendations for your recovery or mobility plan",
    ],
    price: "R600 (once-off, 60 minutes)",
    cta: "/ContactUs",
  },
  {
    title: "Most Popular – CARE Mobility Package",
    description: "Ideal for long-term recovery, chronic conditions, or maintaining independence.",
    features: [
      "Adaptive therapeutic exercise",
      "Strength, flexibility, and balance training",
      "Progress tracking and regular re-assessments",
    ],
    price: "R4,400 / month (12-month program) - \n 2x/week, 60-minute sessions",
    cta: "/ContactUs",
  },
  {
    title: "Premium – CARE Elite Program",
    description: "Targeted training for athletes and active individuals to enhance physical performance and prevent injuries.",
    features: [
      "Sport\-specific strength \& mobility training",
      "Movement quality and biomechanical correction",
      "Speed, agility, and proprioception development",
      "Return\-to\-play strategies and performance tracking",
    ],
    price: "R6,500 / month (12-month program) - 3x/week, 60-minute sessions",
    cta: "/ContactUs",
  },
  {
    title: "Injury Recovery Support",
    description: "Rehabilitation-focused sessions are designed to bridge the gap between physiotherapy and full physical readiness.",
    features: [
      "Post-operative recovery \(e.g. joint replacement, ligament repair\)",
      "Ongoing or chronic pain management",
      "Functional return after orthopedic or neurological rehab",
    ],
    price: "R800 per session *",
    cta: "/ContactUs",
  },
];

const OurServices = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">
        <div className="mb-12 md:flex md:justify-between gap-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Services Designed for <br />
            <span className="bg-gradient-to-br from-teal-600 via-sky-700 to-blue-900 bg-clip-text text-transparent">
              Your Health & Performance
            </span>
          </h1>
          <p className="text-gray-700 max-w-xl pt-5 md:pt-0">
            {"CARE Therapy brings individualized, mobile care to you — whether you\’re managing a chronic condition, recovering from injury, or looking to move and live better. Each service is guided by clinical expertise and a personal approach."}
          </p>
        </div>

        <div className="space-y-4 divide-y divide-gray-200">
          {services.map((service, index) => (
            <div key={index} className="pt-8 grid gap-6 md:grid-cols-5">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <div className="md:col-span-3">
                <ul className="space-y-3 text-gray-700 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check/>
                      <span className="mt-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col mb-4 sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="font-bold text-xl text-gray-900">{service.price}</div>
                  <Link href={service.cta} className="btn btn-primary">
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div>
            <p>* Pricing varies based on location and travel times. Contact us for pricing in your area. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
