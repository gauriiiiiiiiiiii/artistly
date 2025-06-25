'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Artist } from '@/lib/mockData';

interface ArtistCardProps {
  artist: Artist;
  onQuoteRequest?: (artistId: string) => void;
}

export default function ArtistCard({ artist, onQuoteRequest }: ArtistCardProps) {
  const handleQuoteRequest = () => {
    if (onQuoteRequest) {
      onQuoteRequest(artist.id);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1">
      {/* Artist Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
        {artist.verified && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-green-500 hover:bg-green-600 text-white">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-white text-sm">
            <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
            {artist.rating}
            <span className="ml-1 text-gray-300">({artist.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Artist Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {artist.name}
          </h3>
          <div className="text-right">
            <div className="text-sm text-gray-500">Starting at</div>
            <div className="font-semibold text-purple-600">
              ${artist.priceRange.split('-')[0]}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-3">
          {artist.category.map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs capitalize">
              {cat}
            </Badge>
          ))}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {artist.bio}
        </p>

        {/* Location and Availability */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            {artist.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            {artist.availability}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-1">Languages:</div>
          <div className="text-sm text-gray-700">
            {artist.languages.join(', ')}
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          onClick={handleQuoteRequest}
        >
          Request Quote
        </Button>
      </div>
    </div>
  );
}
