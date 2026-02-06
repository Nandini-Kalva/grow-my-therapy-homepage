export default function Hours() {
  return (
    <section className="bg-[#F7F6F3]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-10 h-screen">
        <div className="relative w-full h-[420px] rounded-4xl overflow-hidden">
          <img
            src="/flower1.png"
            alt="Calm therapy space"
            className="object-cover"
          />
        </div>
        
        <div className="text-right mx-25">
          <div className="text-lg text-gray-700">
            <h1 className="text-3xl md:text-4xl font-serif mb-4">
              My Office 📍
            </h1>
            <p>Santa Monica, California</p>
            <p className="mb-10">In-person sessions available</p>
            <h1 className="text-3xl md:text-4xl font-serif mb-4">Hours ⏱️</h1>
            <p>Monday – Friday</p>
            <p>10:00am – 6:00pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
