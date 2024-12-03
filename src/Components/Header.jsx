import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-400">
            Hamming Paso a Paso
          </span>
        </Link>

        <button
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  type="button"
  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden bg-gray-500"
>
  <svg
    className="w-5 h-5 text-gray-400"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
</button>

        <nav
  className={`${
    isMobileMenuOpen ? "flex" : "hidden"
  } w-full md:block md:w-auto`}
>
  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-800 w-full">
    <li>
      <Link
        to="/"
        className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
      >
        Codificador
      </Link>
    </li>
    <li>
      <Link
        to="/about"
        className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
      >
        Acerca de
      </Link>
    </li>
  </ul>
</nav>
      </div>
    </header>
  );
}