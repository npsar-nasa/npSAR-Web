import { Mountain } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-transparent border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo and Name */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Mountain color="#129900" />
          <span className="self-center text-xl text-green-800 font-semibold whitespace-nowrap dark:text-white">
            Nepal's Glacier Lake
          </span>
        </a>

        {/* Navbar Links */}
        <ul
          className="flex flex-row items-center space-x-6 font-medium text-lg 
          bg-transparent text-green-800 dark:text-green-500"
        >
          <li>
            <Link
              to="/"
              className="py-2 px-3 hover:text-green-600 dark:hover:text-green-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="py-2 px-3 hover:text-green-600 dark:hover:text-green-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              className="py-2 px-3 hover:text-green-600 dark:hover:text-green-400"
            >
              Quiz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
