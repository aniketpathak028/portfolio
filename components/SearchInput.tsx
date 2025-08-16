import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
}

export default function SearchInput({ searchTerm, onSearchChange, onClearSearch }: SearchInputProps) {
  return (
    <div className="flex items-center bg-gray-800 rounded border border-gray-700 focus-within:ring-2 focus-within:ring-[var(--link-color)] focus-within:border-transparent">
      <span className="pl-3 text-gray-500">
        <FaSearch size={16} />
      </span>
      <input
        type="text"
        placeholder="search for tags"
        value={searchTerm}
        onChange={onSearchChange}
        className="flex-grow px-2 py-1 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none text-sm sm:text-base"
      />
      {searchTerm && (
        <button onClick={onClearSearch} className="pr-3 text-gray-500 hover:text-gray-300">
          &times;
        </button>
      )}
    </div>
  );
}