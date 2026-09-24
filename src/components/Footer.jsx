function Footer({ links, copyright }) {
  return (
    <footer className="bg-neutral-900 text-white py-10 px-16 flex flex-col items-center gap-5 border-t border-gray-800">
      <div className="flex flex-wrap justify-center gap-5">
        {links.map((link) => (
          <a key={link} href="#" className="text-gray-500 text-sm no-underline hover:underline">
            {link}
          </a>
        ))}
      </div>
      <p className="text-gray-500 text-xs m-0">{copyright}</p>
    </footer>
  );
}

export default Footer;