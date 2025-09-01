// src/pages/FAQ.jsx
import React from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Mandi Darshan?",
    answer:
      "Mandi Darshan is a cultural and tourism initiative that showcases the heritage, temples, rivers, festivals, and traditions of Mandi, also known as the 'Varanasi of the Hills'.",
  },
  {
    question: "Where is Mandi located?",
    answer:
      "Mandi is a historic town in Himachal Pradesh, India, situated on the banks of the Beas River and surrounded by the Himalayas.",
  },
  {
    question: "What are the main attractions of Mandi?",
    answer:
      "Mandi is famous for its 81 ancient temples, the Beas river, Rewalsar Lake, Prashar Lake, Dev Mahadev fair, Shivratri festival, and scenic trekking routes.",
  },
  {
    question: "When is the best time to visit Mandi?",
    answer:
      "The best time to visit is between October to June, when the weather is pleasant. The Shivratri festival (Feb-March) is especially vibrant.",
  },
  {
    question: "How can I reach Mandi?",
    answer:
      "Mandi is well connected by road from Delhi, Chandigarh, and Manali. The nearest airport is Bhuntar (Kullu), and the nearest railway station is Joginder Nagar.",
  },
  {
    question: "Is Mandi safe for tourists?",
    answer:
      "Yes, Mandi is considered very safe for tourists. Locals are welcoming, and it is a peaceful destination for families, solo travelers, and groups.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-cream min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-200 to-yellow-400 py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-900"
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Have questions about Mandi Darshan? Find answers to the most common
          queries below.
        </motion.p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900">
                  {faq.question}
                  <span className="ml-2">
                    <Plus className="h-5 w-5 text-gray-600 group-open:hidden" />
                    <Minus className="h-5 w-5 text-gray-600 hidden group-open:inline" />
                  </span>
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
