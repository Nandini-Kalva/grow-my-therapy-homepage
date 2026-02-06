export default function Services() {
  return (
   
         <section className="py-20 px-8 bg-white min-h-screen">
  <div className="max-w-5xl mx-auto ">
    <h2 className="text-3xl font-serif mb-16 text-center  ">
      Therapy Services
    </h2>

    <div className="grid md:grid-cols-3 gap-10 ">
      <div className="bg-violet-100 border p-10 rounded-lg  hover:bg-blue-100 shadow-md hover:scale-105 hover:shadow-lg transition tranform">
        <h3 className="text-xl font-semibold mb-4 ">
          Anxiety & Stress Management
        </h3>
        <p>
          Support for individuals struggling with chronic stress, worry, and anxiety. Therapy focuses on building emotional regulation, self-awareness, and practical coping strategies.
        </p>
      </div>

      <div className="bg-violet-100  border p-10 rounded-lg  hover:bg-blue-100 shadow-md hover:scale-105 hover:shadow-lg transition tranform">
        <h3 className="text-xl font-semibold mb-4">
          Trauma & PTSD Therapy
        </h3>
        <p>
          Trauma-informed care using evidence-based approaches to help clients process past experiences, restore safety, and rebuild a sense of control and resilience.
        </p>
      </div>

      <div className="bg-violet-100  border p-10 rounded-lg  hover:bg-blue-100 shadow-md hover:scale-105 hover:shadow-lg transition tranform">
        <h3 className="text-xl font-semibold mb-4">
          Life Transitions & Personal Growth
        </h3>
        <p>
          Therapy for navigating major life changes such as career shifts, relationship changes, or identity exploration, with a focus on clarity and emotional balance.
        </p>
      </div>
    </div>
  </div>
</section>

  );
}
