'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function BlogSearch({language}) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      router.push(`/blog/${language}?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="w-full md:w-fit rounded-full px-3 py-1.5 text-sm bg-white flex items-center">
      {/* Search icon */}
      <Search className="w-4 h-4 text-gray-600" />

      {/* Expanding input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="
            h-full w-full rounded-full px-2 text-sm text-gray-800
            bg-white border-0 outline-none
        "
      />
    </div>
  );
}
