"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <section className="bg-[#FAF9F7] bg-gray-200 px-6 py-20">
     
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">
          Reflections & Resources
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          Thoughts from Dr. Maya Reynolds on mental health, self-awareness,
          emotional healing, and personal growth.
        </p>
      </div>

     
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-24">
     
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/blog1.jpg"
            alt="Mindfulness practice"
            width={500}
            height={400}
            className="object-cover w-full h-64"
          />
          <div className="px-8 py-4">
            <h2 className="text-xl font-serif mb-4 ">
              Finding Calm in Everyday Life
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simple mindfulness practices to help you stay grounded during
              stressful moments.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/blog2.jpg"
            alt="Therapy journaling"
            width={500}
            height={300}
            className="object-cover w-full h-64"
          />
          <div className="px-8 py-4">
            <h2 className="text-xl font-serif mb-4">
              Why Emotional Awareness Matters
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Understanding your emotions is the first step toward meaningful
              change.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/blog3.jpg"
            alt="Self care routine"
            width={500}
            height={300}
            className="object-cover w-full h-64"
          />
          <div className="px-8 py-4">
            <h2 className="text-xl font-serif mb-4">
              Building a Gentle Self-Care Routine
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Self-care doesn’t have to be complicated — it just has to be
              consistent.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#8A8F6A] text-black py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">
            Stay connected
          </h2>
          <p className="mb-8 text-black/90">
            Receive thoughtful reflections and mental wellness resources
            directly in your inbox.
          </p>

          <div className="text-center">
             <Link href="/book">
              <button className="bg-purple-700 text-white px-8 py-4 rounded-lg bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 shadow-md hover:scale-105 hover:shadow-lg transition tranform">
               Sign Up
              </button>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
