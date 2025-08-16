import React from 'react';

interface TagSuggestionsProps {
  showSuggestions: boolean;
  filteredTags: string[];
  onTagClick: (tag: string) => void;
  getTagStyles: (tag: string) => string;
}

export default function TagSuggestions({ showSuggestions, filteredTags, onTagClick, getTagStyles }: TagSuggestionsProps) {
  if (!showSuggestions) {
    return null;
  }

  return (
    <div className="absolute z-50 mt-1 w-1/2 md:w-3/4 bg-gray-800 border border-gray-700 rounded shadow-lg max-h-60 overflow-y-auto">
      {filteredTags.length > 0 ? (
        filteredTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className={`block w-full text-left px-4 py-2 hover:bg-gray-700 ${getTagStyles(tag)}`}
          >
            {tag}
          </button>
        ))
      ) : (
        <div className="px-4 py-2 text-gray-500">No tags found</div>
      )}
    </div>
  );
}