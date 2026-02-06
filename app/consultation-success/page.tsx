export default function ConsultationSuccess() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6 py-6">
      <div className="bg-white p-10 rounded-xl shadow-md text-center max-w-md">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          ✅ Consultation Booked!
        </h1>
        <p className="mb-6">
          Thank you for booking your consultation. We will reach out to you
          shortly.
        </p>
        <a
          href="/consulting"
         className="bg-purple-700 text-white px-8 py-4 rounded-lg bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 shadow-md hover:scale-105 hover:shadow-lg transition tranform"
        >
          Back to Consultation Page
        </a>
      </div>
    </section>
  );
}
