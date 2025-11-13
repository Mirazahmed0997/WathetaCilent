"use client";

import { ShoppingCart, Truck, MessageCircle } from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="w-10 h-10 text-blue-600" />,
    title: "Easy Order Management",
    description:
      "Simplify your order process with real-time tracking and automatic updates — manage everything from one dashboard.",
  },
  {
    icon: <Truck className="w-10 h-10 text-blue-600" />,
    title: "Fast & Reliable Shipping",
    description:
      "Deliver your products quickly and safely. Our smart logistics integrations ensure on-time delivery every time.",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-blue-600" />,
    title: "Customer Feedback System",
    description:
      "Collect and manage customer feedback effortlessly to improve satisfaction and build long-term trust.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-blue-600">Our Platform?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We’re more than just a store — we provide an end-to-end solution that
          simplifies your workflow, boosts sales, and delights your customers.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
