import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex items-center justify-center p-4">

      <div className="relative flex items-center border border-gray-300 rounded-l-lg lg:w-[900px] md:w-[600px] w-80">
        <FiSearch className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-lg"
        />
      </div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          Filter
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Male</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Female</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
