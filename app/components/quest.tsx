"use client"; // required for useState

import { useState } from "react";

const faqs = [
  {
    question: "How do I book a therapy session?",
    answer:
      "You can book a session by clicking 'Get Started' on the homepage, selecting a therapist, and choosing a time slot that works for you.",
  },
  {
    question: "Are sessions available online?",
    answer:
      "Yes, we offer virtual sessions via secure video call for clients who prefer remote therapy.",
  },
  {
    question: "What types of therapy are offered?",
    answer:
      "We offer Cognitive Behavioral Therapy (CBT), mindfulness-based therapy, and other evidence-based approaches tailored to your needs.",
  },
  {
    question: "Is my information confidential?",
    answer:
      "Absolutely. All your personal information and session details are kept completely confidential and secure.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-30 px-10 bg-white-200 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
                onClick={() => toggle(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
