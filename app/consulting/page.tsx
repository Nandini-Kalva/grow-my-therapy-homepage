"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ConsultingPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!name || !phone) {
      alert("Please fill in both fields");
      return;
    }
    router.push("/consultation-success");
  };

  return (
    <section className="text-center bg-gray-200 min-h-screen flex flex-col justify-center gap-10 p-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight px-6 py-6">
          Book a Consultation
        </h1>
        <p className="mt-4 mb-2 text-xl">
          Starting therapy can feel like a big step.
        </p>
        <p className="text-xl">
          A free 15-minutes consultation gives us space to talk briefly about
          what you're looking for and see if working together feels like a good
          fit.
        </p>
      </div>

      <div className="mt-10 mx-auto max-w-3xl border-4 border-indigo-600 rounded-lg px-6 py-6 bg-white shadow-md">
        <h2 className="text-3xl font-saina mb-4">What To Expect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🔸 A brief conversation about needs.</li>
          <li>🔸 Time to ask questions about therapy.</li>
          <li>🔸 No pressure to commit.</li>
          <li>🔸 Available via phone or secure video call.</li>
        </ul>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="mt-10 flex flex-col gap-4 mx-auto max-w-6xl"
      >
        <input
          type="text"
          name="name"
          aria-label="Your Name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-4 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg mb-6"
        />
        <input
          type="tel"
          name="phone"
          aria-label="Phone Number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-4 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg mb-6"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 shadow-md hover:scale-105 hover:shadow-lg transition transform"
        >
          Request Consultation
        </button>
      </form>
    </section>
  );
}
