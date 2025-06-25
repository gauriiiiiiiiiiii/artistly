'use client';

import { Suspense } from 'react';
import FilterSection from '@/components/FilterSection';
import ArtistCard from '@/components/ArtistCard';
import { useApp } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

function ArtistListingContent() {
  const { filteredArtists } = useApp();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleQuoteRequest = (artistId: string) => {
    toast.success('Quote request sent! The artist will respond within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <FilterSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Browse Artists
            </h1>
            <p className="text-gray-600">
              {filteredArtists.length} artists available
            </p>
          </div>
          
          {/* View Toggle */}
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Artists Grid/List */}
        {filteredArtists.length === 0 ? (
          <div className="text-center py-16">
            <SlidersHorizontal className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No artists found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters to find more results.
            </p>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }>
            {filteredArtists.map((artist) => (
              <ArtistCard 
                key={artist.id} 
                artist={artist} 
                onQuoteRequest={handleQuoteRequest}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ArtistsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    }>
      <ArtistListingContent />
    </Suspense>
  );
}