function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-10 px-16 flex flex-col items-center gap-5 border-t border-gray-800">
      <div className="flex flex-wrap justify-center gap-5">
        <a href="#" className="text-gray-500 text-sm no-underline hover:underline">FAQ</a>
        <a href="#" className="text-gray-500 text-sm no-underline hover:underline">Help Centre</a>
        <a href="#" className="text-gray-500 text-sm no-underline hover:underline">Terms of Use</a>
        <a href="#" className="text-gray-500 text-sm no-underline hover:underline">Privacy</a>
        <a href="#" className="text-gray-500 text-sm no-underline hover:underline">Cookie Preferences</a>
        <a href="#" className="text-gray-500 text-sm no-underline hover:underline">Contact Us</a>
      </div>
      <p className="text-gray-500 text-xs m-0">© 2026 Netflix Clone. Built for learning purposes.</p>
    </footer>
  );
}

export default Footer;