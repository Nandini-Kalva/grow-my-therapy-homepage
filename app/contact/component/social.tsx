export default function Social() {
  return (
    <section className="h-screen" >
      <div className="text-center  max-w-6xl gap-12 items-center m-25 ">
        <h2 className="text-4xl font-serif mb-4">Find me on social</h2>
        <p className="text-gray-600">Instagram · Psychology Today · LinkedIn</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        <img
          src="/social1.jpg"
          alt="Office interior"
          width={300}
          height={300}
          className="object-cover h-90 w-full rounded-2xl"
        />
        <img
          src="/social2.jpg"
          alt="Therapy space"
          width={300}
          height={300}
          className="object-cover h-90 w-full rounded-2xl"
        />
        <img
          src="/social3.jpg"
          alt="Calm environment"
          width={300}
          height={300}
          className="object-cover h-90 w-full rounded-2xl"
        />
        <img
          src="/social4.jpg"
          alt="Waiting area"
          width={300}
          height={300}
          className="object-cover h-90 w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
