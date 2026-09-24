function Hero({ title, subtitle, buttonLabel, backgroundImage }) {
  return (
    <div
      className="bg-neutral-900 bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-center text-white px-5"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <h1 className="text-5xl font-bold max-w-[700px] mb-4">
        {title}
      </h1>
      <p className="text-xl mb-6">{subtitle}</p>
      <button className="bg-red-600 hover:bg-red-800 text-white py-4 px-8 text-xl font-bold rounded cursor-pointer transition-colors">
  {buttonLabel} &gt;
</button>
    </div>
  );
}

export default Hero;