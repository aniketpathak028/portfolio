"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import SearchInput from './SearchInput';
import TagSuggestion from './TagSuggestion';
import SelectedTagList from './SelectedTagList';

interface TagSearchProps {
  availableTags: string[];
  currentTags: string[];
}

export default function TagSearch({ availableTags, currentTags }: TagSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedTags, setSelectedTags] = useState<string[]>(currentTags);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTags, setFilteredTags] = useState<string[]>(availableTags);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === '') {
      setFilteredTags(availableTags);
      setShowSuggestions(false);
    } else {
      const lowerCaseValue = value.toLowerCase();
      const matches = availableTags.filter(tag =>
        tag.toLowerCase().includes(lowerCaseValue)
      );
      setFilteredTags(matches);
      setShowSuggestions(true);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setFilteredTags(availableTags);
    setShowSuggestions(false);
  };

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      const newSelectedTags = [...selectedTags, tag];
      setSelectedTags(newSelectedTags);
      updateUrl(newSelectedTags);
      handleClearSearch();
    }
  };

  const removeTag = (tagToRemove: string) => {
    const newSelectedTags = selectedTags.filter(tag => tag !== tagToRemove);
    setSelectedTags(newSelectedTags);
    updateUrl(newSelectedTags);
  };

  const updateUrl = (tags: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tags.length > 0) {
      params.set('tags', tags.join(','));
    } else {
      params.delete('tags');
    }
    router.push(`?${params.toString()}`);
  };

  const tagBaseStyles = "text-xs px-2 py-1 rounded text-sm transition-colors mr-1 sm:mr-2 mb-1 sm:mb-2 cursor-pointer";

  const getTagStyles = (tag: string) => {
    const isSelected = selectedTags.includes(tag);
    return `${tagBaseStyles} ${
      isSelected
        ? "text-xs px-2 py-1 text-[var(--link-color)] bg-gray-800"
        : "text-xs px-2 py-1 text-gray-400 bg-gray-800 rounded hover:text-[var(--link-color)]"
    }`;
  };

  return (
    <div className="mb-8">
      <div className="w-full sm:w-1/2 md:w-3/4 mx-auto" ref={containerRef}>
        <SearchInput
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onClearSearch={handleClearSearch}
        />
        <TagSuggestion
          showSuggestions={showSuggestions}
          filteredTags={filteredTags}
          onTagClick={addTag}
          getTagStyles={getTagStyles}
        />
      </div>

      <SelectedTagList
        selectedTags={selectedTags}
        onTagRemove={removeTag}
        getTagStyles={getTagStyles}
      />
    </div>
  );
}