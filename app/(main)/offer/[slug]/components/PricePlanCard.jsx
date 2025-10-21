"use client"
import React from "react"
import { CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export default function PricePlanCard({ plan }) {
  const {
    name,
    description,
    priceRegularBDT,
    priceRegularUSD,
    duration,
    durationType,
    isPopular,
    isRecommended,
    featureGroups,
  } = plan

  return (
    <div
      className={`
        relative flex flex-col justify-between rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md
        ${isPopular ? "border-blue-500" : "border-gray-200"}
        ${isRecommended ? "bg-blue-50" : "bg-white"}
      `}
    >
      {/* Tag */}
      {(isPopular || isRecommended) && (
        <span
          className={`
            absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white
            ${isPopular ? "bg-blue-600" : "bg-emerald-600"}
          `}
        >
          {isPopular ? "Most Popular" : "Recommended"}
        </span>
      )}

      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900">৳{priceRegularBDT}</p>
            <p className="text-sm text-gray-500">${priceRegularUSD} USD</p>
          </div>
          <div className="mt-2 sm:mt-0">
            <p className="text-sm font-medium text-gray-700">
              Duration: <span className="text-gray-900">{duration} {durationType}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-6 space-y-4">
        {Object.entries(featureGroups || {}).map(([groupName, features]) => (
          <div key={groupName}>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">{groupName}</h4>
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f.id} className="flex items-start gap-2">
                  {f.included ? (
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                  ) : (
                    <XCircle className="h-4 w-4 text-gray-400 mt-0.5" />
                  )}
                  <div>
                    <p className="text-sm text-gray-700 font-medium">{f.name}</p>
                    {f.planDescription && (
                      <p className="text-xs text-gray-500">{f.planDescription}</p>
                    )}
                    {f.limitValue && (
                      <p className="text-xs text-gray-400">Limit: {f.limitValue}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Button */}
      <Link href={`/payment/${plan?.id}`} className="mt-6 text-center w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition">
        Choose Plan
      </Link>
    </div>
  )
}
