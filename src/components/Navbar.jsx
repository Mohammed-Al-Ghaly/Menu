// روابط شريط التنقل
const navLinks = [
  { name: "All", href: "#" },
  { name: "Breakfasth", href: "#" },
  { name: "Lunch", href: "#" },
  { name: "Dinner", href: "#" },
];

function Navbar() {
  return (
    <div className="text-sm text-white w-full">
      {/* 2. شريط التنقل الرئيسي (Main Nav) */}
      <nav className="relative h-52 flex flex-col md:flex-row  items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-black/80 text-white transition-all shadow">
        {/* الشعار */}
        <h1 className="text-3xl font-bold">
          F<span className="text-red-500">oo</span>dy Z
          <span className="text-red-500">o</span>ne
        </h1>
        {/* قائمة سطح المكتب */}
        <ul className="flex space-x-4 md:space-x-8 md:pl-28 order-3 md:order-0 md:self-end md:mb-4">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:scale-95 transition-all">
              <a
                href={link.href}
                className="text-white bg-[#FF4343] py-2 px-4 rounded"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* زر سطح المكتب */}
        <input
          placeholder="Search Food...."
          className="bg-transparent border border-[#FF4343] text-white px-6 py-2 rounded active:scale-95 transition-all outline-none order-2 md:order-0"
        />
      </nav>
    </div>
  );
}

export default Navbar;
