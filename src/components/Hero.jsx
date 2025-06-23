export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand to-coral text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Connect Instantly with Trusted Local Service Providers
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10">
          Discover services around you, book instantly, and make secure payments through M-pesa, or grow your business by joining TafutaPro as a service provider.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-white text-brand font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
            Become a Service Provider
          </button>
          <button className="bg-heading text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-heading/90 transition">
            Browse Services
          </button>
        </div>
      </div>
    </section>
  );
}
