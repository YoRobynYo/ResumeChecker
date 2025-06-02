// src/components/LandingPage.js

import React, { useState } from 'react';
import UploadForm from './UploadForm';

function LandingPage() {
  const [hasPaid, setHasPaid] = useState(false);

  // Show 3-card layout after payment
  if (hasPaid) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 m-0">
        <h1 className="text-3xl font-bold text-center mb-10">
          Welcome to Resume Assistant
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-64 bg-white border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">Card 1</span>
          </div>
          <div className="h-64 bg-white border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">Card 2</span>
          </div>
          <div className="h-64 bg-white border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">Card 3</span>
          </div>
        </div>
      </div>
    );
  }

  // Home screen with new background and form
  return (
    <div
        className="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden p-0 m-0"
        style={{
          backgroundImage: "url('/images/22447822-5.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl max-w-md w-full flex flex-col space-y-6">
  <h2 className="text-2xl font-bold text-center text-gray-800">
    Upload Your Resume
  </h2>

  {/* Simulated payment button */}
  <button
    onClick={() => setHasPaid(true)}
    className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow"
  >
    Pay Now £29.99
  </button>

  {/* Upload form */}
  <UploadForm hasPaid={hasPaid} />
</div>

    </div>
  );
}

export default LandingPage;
