import { Link } from "react-router";
import LogoECM from "./../assets/ECM3.png";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    };

    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, []);

  // (Optional but nice) Close dropdown on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav className="bg-gray-800 shadow-lg flex items-center justify-around py-2.5 px-4 sm:px-16 fixed top-0 w-full md:w-full z-50">
      <Link to="/" className="shrink-0">
        <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
          <img src={LogoECM} className="w-16 sm:w-48 sm:h-12 text-4xl sm:text-6xl" />
        </span>
      </Link>

      <div className="flex items-center gap-2 sm:gap-5">
        <Link
          to="/"
          className="py-1 px-3 text-base sm:text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="py-1 px-3 text-base sm:text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Skills
        </Link>

        <Link
          to="/contact"
          className="py-1 px-3 text-base sm:text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Contact
        </Link>

        {/* Product dropdown (CLICK ONLY) */}
        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="product-dropdown"
            className="py-1 px-3 text-base sm:text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300 flex items-center gap-2"
          >
            Projects
            <span className={`text-xs transition ${open ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {open && (
            <ul
              id="product-dropdown"
              className="absolute right-0 mt-2 w-52 rounded-xl bg-gray-800 shadow-lg ring-1 ring-black/20 overflow-hidden"
            >
              <li>
                <Link
                  to="/product/one"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-sky-300 transition"
                >
                  Weather Wizard
                </Link>
              </li>
              <li>
                <Link
                  to="/product/two"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-sky-300 transition"
                >
                  Star Wars Landing Page
                </Link>
              </li>
              <li>
                <Link
                  to="/product/three"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-sky-300 transition"
                >
                  DnDnotes
                </Link>
              </li>
              <li>
                <Link
                  to="/product/four"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-white hover:bg-slate-700 hover:text-sky-300 transition"
                >
                  Menu Chicken Burger
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
