import Image from "next/image";
import Container from "./container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-200 py-24 ">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-50">
          <div className="flex-1 text-center md:text-left ">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Find a therapist who truly understands you
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Connect with a licensed therapist and begin your journey toward
              better mental health.
            </p>
            <Link href="/contact">
              <button className="bg-purple-700 text-white px-8 py-4 rounded-lg bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 shadow-md hover:scale-105 hover:shadow-lg transition tranform">
               Get Started
              </button>
            </Link>
          </div>

          <div className="flex-1">
            <Image
              src="/bookn.png"
              alt="Therapy session illustration"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}





<button className="">
              Get Started
            </button>