// src/components/HomePage.js

import React, { useState } from 'react';
import TestHeroCard from './TestHeroCard';

const cardsData = [
  {
    title: 'Entry Level CV',
    description: 'Students & graduates (little or no experience)',
    features: [
      'Entry Level CV rewrite',
      'Cover letter',
      'LinkedIn profile',
      'ATS optimised',
      'Unlimited rewrites / 1 year support',
    ],
    price: '£69',
  },
  {
    title: 'Professional CV',
    description: 'Mid level professionals (3+ years experience)',
    features: [
      'Professional CV rewrite',
      'Cover letter',
      'LinkedIn profile',
      'ATS optimised',
      'Unlimited rewrites / 1 year support',
    ],
    price: '£139',
  },
  {
    title: 'Specialist CV',
    description: 'Senior Managerial roles, Directorships and Niche professions',
    features: [
      'Specialist CV rewrite',
      'Cover letter',
      'LinkedIn profile',
      'ATS optimised',
      'Unlimited rewrites / 1 year support',
    ],
    price: '£189',
  },
];

export default function HomePage() {
  const [hasPaid, setHasPaid] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (planTitle) => {
    setSelectedPlan(planTitle);
  };

  const handleBack = () => {
    setSelectedPlan(null);
  };

  // Step 1: After user paid and selected a plan
  if (hasPaid && selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center p-8 text-white text-center">
        <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">
          You selected: <span className="underline">{selectedPlan}</span>
        </h1>
        <p className="text-lg mb-6">
          We’re getting things ready for your <strong>{selectedPlan}</strong> resume...
        </p>
        <button
          onClick={() => alert("In the next step, we’ll connect to AI or show a form.")}
          className="px-6 py-3 bg-white text-green-600 font-semibold rounded shadow hover:bg-gray-100 mb-4"
        >
          Continue
        </button>
        <button
          onClick={handleBack}
          className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded shadow hover:bg-gray-300"
        >
          &larr; Back
        </button>
      </div>
    );
  }

  // Step 2: Paid but no plan selected
  if (hasPaid && !selectedPlan) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          <h1 className="text-5xl font-extrabold text-center mb-16 text-white drop-shadow-lg">
            Your Resume Options Are Ready!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardsData.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                  <ul className="text-gray-700 mb-6 list-disc list-inside space-y-1">
                    {card.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-2xl font-extrabold mb-4">{card.price}</p>
                  <button
                    onClick={() => handlePlanSelect(card.title)}
                    className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow"
                  >
                    Order Now &rsaquo;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Default screen (user not paid yet)
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Image Column */}
      <div className="md:w-1/2 w-full h-64 md:h-full flex items-center justify-center bg-black p-4">
        <img
          src="/images/22447822.png"
          alt="Left Visual"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Right Column with Gradient Card */}
      <div
        className="md:w-1/2 w-full flex items-center justify-center bg-cover bg-center p-8"
        style={{ backgroundImage: "url('/images/22766439753.png')" }}
      >
        <TestHeroCard onGenerate={() => setHasPaid(true)} />
      </div>
    </div>
  );
}
