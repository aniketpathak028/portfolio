import React from 'react';

interface SelectedTagListProps {
  selectedTags: string[];
  onTagRemove: (tag: string) => void;
  getTagStyles: (tag: string) => string;
}

export default function SelectedTagList({ selectedTags, onTagRemove, getTagStyles }: SelectedTagListProps) {
  if (selectedTags.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2 justify-center">
      {selectedTags.map((tag) => (
        <React.Fragment key={tag}>
          <button
            onClick={() => onTagRemove(tag)}
            className={`flex items-center ${getTagStyles(tag)}`}
          >
            {tag}
            <span className="ml-1 font-bold text-gray-500 hover:text-red-500">x</span>
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}