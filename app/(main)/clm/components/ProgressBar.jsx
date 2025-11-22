'use client';
import { useState, useEffect } from 'react';

const steps = [
  {
    id: 1,
    title: 'Step 1',
    text: 'Businesses request payments through WhatsApp using Picky Assist.',
    img: 'https://pickyassist.com/en/img/WhatsApp-Payment/Businesses-request-payments-through-WhatsApp-using-Picky-Assist.webp',
  },
  {
    id: 2,
    title: 'Step 2',
    text: 'Customers receive a clear, detailed payment request on their WhatsApp.',
    img: 'https://pickyassist.com/en/img/WhatsApp-Payment/Businesse-promptly-ship-products-or-deliver-services.webp',
  },
  {
    id: 3,
    title: 'Step 3',
    text: 'Customers review and securely complete payment without leaving WhatsApp.',
    img: 'https://pickyassist.com/en/img/WhatsApp-Payment/Customers-review-and-securely-complete-the-payment-without-leaving-WhatsApp.webp',
  },
  {
    id: 4,
    title: 'Step 4',
    text: 'Businesses receive instant confirmation of payment completion.',
    img: 'https://pickyassist.com/en/img/WhatsApp-Payment/Businesses-receive-instant-confirmation-of-payment-completion.webp',
  },
  {
    id: 5,
    title: 'Step 5',
    text: 'Businesses promptly ship products or deliver services.',
    img: 'https://pickyassist.com/en/img/WhatsApp-Payment/Businesse-promptly-ship-products-or-deliver-services.webp',
  },
];

export default function ProgressBar() {
 const [activeStep, setActiveStep] = useState(0);

  // ---- Auto progress every 3 s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // ---- Manual click handler (also resets sense of motion)
  const handleStepClick = (i) => setActiveStep(i);

  return (
   <section className="w-full bg-green-50 py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          How Does <span className="text-green-600">WhatsApp Pay</span> Work?
        </h2>
        <p className="text-gray-600 mb-10 text-base">
          Simple steps to request and confirm payments seamlessly on WhatsApp.
        </p>

        {/* ===== Progress bar ===== */}
        <div className="relative flex justify-between items-center mx-auto mb-10 max-w-3xl select-none">
          {/* Line background */}
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-300 -translate-y-1/2" />
          {/* Active progress line */}
          <div
            className="absolute top-1/2 left-0 h-[3px] bg-green-500 transition-all duration-700 -translate-y-1/2"
            style={{
              width: `${(activeStep / (steps.length - 1)) * 100}%`,
            }}
          />
          {/* Step circles */}
          {steps.map((s, i) => (
            <button
              key={s.id}
              onClick={() => handleStepClick(i)}
              className={`relative flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm transition-all z-10
                ${
                  i <= activeStep
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-600 hover:bg-green-300'
                }`}
            >
              {s.id}
            </button>
          ))}
        </div>

        {/* ===== Step cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-12">
          {steps.map((s, i) => (
            <div
              key={s.id}
              onClick={() => handleStepClick(i)}
              className={`cursor-pointer p-6 rounded-xl border transition-all duration-500 shadow-sm 
                ${
                  i === activeStep
                    ? 'bg-green-500 text-white scale-[1.05]'
                    : 'bg-white text-gray-800 hover:shadow-md'
                }`}
            >
              <span
                className={`inline-block mb-2 px-3 py-1 rounded-full text-sm font-medium ${
                  i === activeStep
                    ? 'bg-white text-green-600'
                    : 'bg-green-100 text-green-600'
                }`}
              >
                {s.title}
              </span>
              <p className="text-sm sm:text-base leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        {/* ===== Image area ===== */}
        <div className="relative w-full max-w-3xl h-[320px] sm:h-[400px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white">
          {steps.map((s, i) => (
            <img
              key={s.id}
              src={s.img}
              alt={s.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === activeStep ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}