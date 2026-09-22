function Hero() {
  return (
    <div
      className="bg-neutral-900 bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-center text-white px-5"
      style={{ backgroundImage: "url('https://picsum.photos/1600/900?random=1')" }}
    >
      <h1 className="text-5xl font-bold max-w-[700px] mb-4">
        See what the whole world is watching
      </h1>
      <p className="text-xl mb-6">Starts at ₹149. Cancel at any time.</p>
      <button className="bg-red-600 text-white py-4 px-8 text-xl font-bold rounded cursor-pointer">
        Finish Sign-Up &gt;
      </button>
    </div>
  );
}

export default Hero;