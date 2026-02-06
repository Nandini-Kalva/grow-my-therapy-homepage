import Image from "next/image";

export default function Office() {
  return (
    <section className="py-20 px-8 min-h-screen bg-[#F7F6F3]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-center">
          A Calm Space for Healing
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700 ">
          Dr. Maya Reynolds’ practice offers a quiet, welcoming environment
          designed to help clients feel safe, comfortable, and at ease during
          their sessions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src="/office.jpeg"
            alt="Therapist"
            width={400}
            height={300}
            className="w-full h-64 object-cover rounded-lg"
          />
          <Image
            src="/office1.jpeg"
            alt="Office Room"
            width={400}
            height={300}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <p className="text-center mt-8 text-gray-600">
          In-person sessions are available in California, with virtual options
          for clients who prefer remote therapy.
        </p>
      </div>
    </section>
  );
}
