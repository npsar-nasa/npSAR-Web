import { Mountain } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Name */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Mountain color="#129900" />
          <span className="self-center text-2xl text-green-800 font-semibold whitespace-nowrap dark:text-white">
            Nepal's Glacier Lake
          </span>
        </a>

        {/* Navbar Links */}
        <div className="w-full md:block md:w-auto">
          <ul
            className="flex flex-col font-medium text-2xl mt-4 rounded-lg bg-gray-50 
          md:flex-row md:space-x-8 md:mt-0 mr-6 md:border-0 md:bg-transparent 
          dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
          >
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-white bg-green-800 rounded-sm 
                md:bg-transparent md:text-green-800 md:dark:text-green-500 
                md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 md:p-0 text-white bg-green-800 rounded-sm 
                md:bg-transparent md:text-green-800 md:dark:text-green-500 
                md:dark:bg-transparent"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/quiz"
                className="block py-2 px-3 md:p-0 text-white bg-green-800 rounded-sm 
                md:bg-transparent md:text-green-800 md:dark:text-green-500 
                md:dark:bg-transparent"
                aria-current="page"
              >
                Quiz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
