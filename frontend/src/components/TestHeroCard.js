import React from 'react';

export default function TestHeroCard({ onGenerate }) {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-sm mx-auto h-[450px]">
      {/* Gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-pink-500 z-0"></div>

      {/* Foreground content */}
      <div className="relative z-20 flex flex-col items-start justify-between h-full px-6 py-6 text-white">
        
        {/* Titles */}
        <h1 className="text-3xl font-extrabold leading-tight mb-1">Your Resume Builder</h1>
        <h2 className="text-3xl font-semibold opacity-95 leading-tight mb-4">Have your resume</h2>
    
        {/* Checklist */}
        <div className="text-md font-medium opacity-90 leading-snug w-full">
          <div className="flex items-center mt-1">
            <span className="text-lg font-semibold">checked</span>
            <span className="ml-[30px] bg-green-600 p-1 rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>

          <div className="flex items-center mt-1">
            <span className="text-lg font-semibold">improved</span>
            <span className="ml-[25px] bg-green-600 p-1 rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>

          <div className="flex items-center mt-1">
            <span className="text-lg font-semibold">tested</span>
            <span className="ml-[50px] bg-green-600 p-1 rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>

          <p className="mt-5">IN MINUTES BY AI.</p>
        </div>

       
        {/* Button */}
        <div className="pt-2 w-full">
          <button
            type="button"
            onClick={() => setTimeout(onGenerate, 150)}
            className="w-full px-6 py-4 rounded-2xl bg-black text-blue-300 font-bold text-center relative shadow-lg group active:scale-95 transition-transform duration-150 ease-in-out"
          >
            <span className="absolute inset-0 rounded-2xl bg-blue-500 opacity-30 blur-md group-hover:opacity-50 transition duration-100" />
            <span className="relative flex items-center justify-center gap-2 z-10">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Generate Your Resume
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
