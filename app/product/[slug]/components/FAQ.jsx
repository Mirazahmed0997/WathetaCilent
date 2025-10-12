"use client";
import { Plus } from "lucide-react";
import React from "react";

export default function FAQ({ data }) {

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
        {data.map((faq, index) => (
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