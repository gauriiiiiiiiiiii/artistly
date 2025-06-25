'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Artist, Booking, mockArtists, mockBookings } from '@/lib/mockData';

interface AppContextType {
  artists: Artist[];
  bookings: Booking[];
  filteredArtists: Artist[];
  searchQuery: string;
  selectedCategories: string[];
  selectedLocation: string;
  selectedPriceRange: string;
  setSearchQuery: (query: string) => void;
  setSelectedCategories: (categories: string[]) => void;
  setSelectedLocation: (location: string) => void;
  setSelectedPriceRange: (range: string) => void;
  addArtist: (artist: Omit<Artist, 'id'>) => void;
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt'>) => void;
  filterArtists: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [artists, setArtists] = useState<Artist[]>(mockArtists);
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>(mockArtists);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const filterArtists = () => {
    let filtered = artists;

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(artist =>
        artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artist.bio.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(artist =>
        artist.category.some(cat => selectedCategories.includes(cat))
      );
    }

    // Location filter
    if (selectedLocation) {
      filtered = filtered.filter(artist =>
        artist.location.includes(selectedLocation)
      );
    }

    // Price range filter
    if (selectedPriceRange) {
      filtered = filtered.filter(artist =>
        artist.priceRange === selectedPriceRange
      );
    }

    setFilteredArtists(filtered);
  };

  const addArtist = (artistData: Omit<Artist, 'id'>) => {
    const newArtist: Artist = {
      ...artistData,
      id: Date.now().toString(),
    };
    setArtists(prev => [...prev, newArtist]);
    setFilteredArtists(prev => [...prev, newArtist]);
  };

  const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt'>) => {
    const newBooking: Booking = {
      ...bookingData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setBookings(prev => [...prev, newBooking]);
  };

  return (
    <AppContext.Provider value={{
      artists,
      bookings,
      filteredArtists,
      searchQuery,
      selectedCategories,
      selectedLocation,
      selectedPriceRange,
      setSearchQuery,
      setSelectedCategories,
      setSelectedLocation,
      setSelectedPriceRange,
      addArtist,
      addBooking,
      filterArtists,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}