"use client";
import { Plus } from "lucide-react";
import React from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Watheta?",
      answer:
        "Watheta is a marketing and communication platform designed to help businesses connect with their customers via WhatsApp, Facebook, Instagram, and more — all in one unified inbox.",
    },
    {
      question: "How does Live Chat work on Watheta?",
      answer:
        "Multiple team members can manage live WhatsApp chats from a single business number. You can also filter chats by tags, campaigns, or customer attributes for smart agent routing.",
    },
    {
      question: "Can I automate my campaigns?",
      answer:
        "Yes! With Watheta you can schedule WhatsApp campaigns, create triggers, and use audience segmentation to deliver messages at the right time — automatically.",
    },
    {
      question: "Is Watheta secure?",
      answer:
        "Absolutely. Watheta follows enterprise-grade security protocols, ensuring your data is encrypted end-to-end and fully GDPR compliant.",
    },
    {
      question: "Do I need technical skills to integrate Watheta?",
      answer:
        "Not at all. Watheta offers ready-to-use integrations with CRMs, ERPs, and third-party tools. No complex setup required.",
    },
  ];

  return (
    <section className="w-full bg-amber-50">
      <div className="w-full max-w-4xl mx-auto px-4 py-20 space-y-10">
        {/* Header */}
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Everything you need to know about using{" "}
          <span className="font-semibold text-emerald-500">WaTheta</span>
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border border-gray-200 rounded-lg p-5 bg-white shadow-sm"
          >
            <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-800 list-none hover:underline select-none">
              {faq.question}
              <span className="ml-2 transition-transform duration-300 group-open:rotate-45">
                <Plus className="w-4 h-4"/>
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
}