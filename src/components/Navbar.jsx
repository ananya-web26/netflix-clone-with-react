function Navbar() {
  return (
    <nav className="flex justify-between items-center py-5 px-16 bg-neutral-900">
      <h1 className="text-red-600 text-3xl font-bold m-0 tracking-wide">NETFLIX</h1>
      <div className="flex items-center gap-4">
        <select className="bg-black text-white border border-gray-600 py-1.5 px-2.5 rounded">
          <option>English</option>
          <option>हिंदी</option>
        </select>
        <button className="bg-red-600 text-white py-2 px-5 rounded font-bold cursor-pointer">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;