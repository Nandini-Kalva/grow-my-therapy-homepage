import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 px-8 bg-gray-200 min-h-screen p-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <Image
            src="/profile-hero.png"
            alt="Therapist team"
            width={300}
            height={200}
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            About Dr. Maya Reynolds
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            I’m a licensed clinical psychologist in Santa Monica, helping adults
            manage anxiety, stress, trauma, and burnout.
          </p>
          <p className="text-gray-600 text-lg mb-8">
            I work with high-achieving individuals who feel stuck, exhausted, or
            emotionally on edge.</p>
            <p className="text-gray-600 text-lg mb-6">
              My approach is warm, collaborative, and evidence-based, using CBT,
              EMDR, mindfulness, and body-focused techniques.
            </p>
          <p className="text-gray-600 text-lg mb-6">
            I offer in-person and secure telehealth sessions, creating a safe
            space for insight, resilience, and personal growth.
          </p>
             <Link  href="/blog" >
              <button className="bg-purple-700 text-white px-8 py-4 rounded-lg bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 shadow-md hover:scale-105 hover:shadow-lg transition tranform ">
               Know More
              </button>
             </Link>
            
        </div>
      </div>
    </section>
  );
}
