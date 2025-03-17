import { Link } from "react-router-dom";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              MyApp
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <HomeIcon className="h-5 w-5 mr-1" />
              Home
            </Link>
            <Link
              to="/profile"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <UserIcon className="h-5 w-5 mr-1" />
              Profile
            </Link>
            <Link
              to="/settings"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <CogIcon className="h-5 w-5 mr-1" />
              Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
