'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Filter, X } from 'lucide-react';

import { categories, locations, priceRanges } from '@/lib/mockData';
import { useApp } from '@/context/AppContext';

export default function FilterSection() {
  const {
    searchQuery,
    selectedCategories,
    selectedLocation,
    selectedPriceRange,
    setSearchQuery,
    setSelectedCategories,
    setSelectedLocation,
    setSelectedPriceRange,
    filterArtists,
  } = useApp();

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    filterArtists?.();
  }, [searchQuery, selectedCategories, selectedLocation, selectedPriceRange, filterArtists]);

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedLocation('');
    setSelectedPriceRange('');
  };

  const activeFiltersCount =
    selectedCategories.length + (selectedLocation ? 1 : 0) + (selectedPriceRange ? 1 : 0);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Search and Filter */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search artists by name or bio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters((prev) => !prev)}
              className="relative"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge className="ml-2 bg-purple-600 text-white text-xs px-1.5 py-0.5">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>

            {activeFiltersCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="w-4 h-4 mr-1" />
                Clear All
              </Button>
            )}
          </div>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedCategories.map((categoryId) => {
              const category = categories.find((c) => c.id === categoryId);
              return (
                <Badge key={categoryId} variant="secondary" className="flex items-center gap-1">
                  {category?.name}
                  <X
                    className="w-3 h-3 cursor-pointer hover:text-red-500"
                    onClick={() => handleCategoryChange(categoryId, false)}
                  />
                </Badge>
              );
            })}
            {selectedLocation && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {selectedLocation}
                <X
                  className="w-3 h-3 cursor-pointer hover:text-red-500"
                  onClick={() => setSelectedLocation('')}
                />
              </Badge>
            )}
            {selectedPriceRange && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {priceRanges.find((r) => r.value === selectedPriceRange)?.label}
                <X
                  className="w-3 h-3 cursor-pointer hover:text-red-500"
                  onClick={() => setSelectedPriceRange('')}
                />
              </Badge>
            )}
          </div>
        )}

        {/* Filter Panel */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 p-6 bg-gray-50 rounded-xl">
            {/* Categories */}
            <div>
              <Label className="text-base font-semibold mb-3 block">Categories</Label>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={(checked) =>
                        handleCategoryChange(category.id, checked as boolean)
                      }
                    />
                    <Label
                      htmlFor={category.id}
                      className="text-sm font-normal cursor-pointer flex items-center"
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <Label className="text-base font-semibold mb-3 block">Location</Label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div>
              <Label className="text-base font-semibold mb-3 block">Price Range</Label>
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Price Ranges</SelectItem>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
