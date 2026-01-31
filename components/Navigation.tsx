"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="text-xl md:text-2xl font-bold text-gray-900">
            Data Science & ML Consulting
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#cases"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Cases
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Team
            </a>
            <a
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a
              href="#services"
              className="block text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#cases"
              className="block text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cases
            </a>
            <a
              href="#team"
              className="block text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Team
            </a>
            <a
              href="#contact"
              className="block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

