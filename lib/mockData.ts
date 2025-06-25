export interface Artist {
  id: string;
  name: string;
  category: string[];
  bio: string;
  priceRange: string;
  location: string;
  languages: string[];
  image: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  availability: string;
}

export interface Booking {
  id: string;
  artistId: string;
  artistName: string;
  eventTitle: string;
  eventDate: string;
  location: string;
  status: 'pending' | 'confirmed' | 'rejected';
  clientName: string;
  fee: number;
  createdAt: string;
}

export const categories = [
  { id: 'singers', name: 'Singers', icon: '🎤', description: 'Professional vocalists for all occasions' },
  { id: 'dancers', name: 'Dancers', icon: '💃', description: 'Contemporary, classical, and cultural dancers' },
  { id: 'speakers', name: 'Speakers', icon: '🎯', description: 'Motivational and keynote speakers' },
  { id: 'djs', name: 'DJs', icon: '🎧', description: 'Professional DJs for events and parties' },
  { id: 'bands', name: 'Bands', icon: '🎸', description: 'Live bands and musical groups' },
  { id: 'comedians', name: 'Comedians', icon: '😂', description: 'Stand-up comedians and entertainers' }
];

export const locations = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'Miami, FL',
  'Seattle, WA',
  'Austin, TX',
  'Nashville, TN'
];

export const priceRanges = [
  { value: '500-1000', label: '$500 - $1,000' },
  { value: '1000-2500', label: '$1,000 - $2,500' },
  { value: '2500-5000', label: '$2,500 - $5,000' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: '10000+', label: '$10,000+' }
];

export const languages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Portuguese',
  'Mandarin',
  'Japanese',
  'Korean',
  'Arabic'
];

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    category: ['singers'],
    bio: 'Professional jazz and soul vocalist with 10+ years of experience',
    priceRange: '2500-5000',
    location: 'New York, NY',
    languages: ['English', 'French'],
    image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviewCount: 87,
    verified: true,
    availability: 'Available'
  },
  {
    id: '2',
    name: 'Marcus Thompson',
    category: ['dancers', 'singers'],
    bio: 'Contemporary dancer and choreographer specializing in modern performances',
    priceRange: '1000-2500',
    location: 'Los Angeles, CA',
    languages: ['English', 'Spanish'],
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviewCount: 64,
    verified: true,
    availability: 'Busy until Feb 2025'
  },
  {
    id: '3',
    name: 'DJ Alex Rivera',
    category: ['djs'],
    bio: 'Electronic music DJ with residencies at top clubs worldwide',
    priceRange: '5000-10000',
    location: 'Miami, FL',
    languages: ['English', 'Spanish', 'Portuguese'],
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviewCount: 132,
    verified: true,
    availability: 'Available'
  },
  {
    id: '4',
    name: 'Emily Chen',
    category: ['speakers'],
    bio: 'Motivational speaker and business consultant with TEDx experience',
    priceRange: '2500-5000',
    location: 'Seattle, WA',
    languages: ['English', 'Mandarin'],
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviewCount: 45,
    verified: true,
    availability: 'Available'
  },
  {
    id: '5',
    name: 'The Midnight Blues',
    category: ['bands'],
    bio: '5-piece blues band with original compositions and classic covers',
    priceRange: '1000-2500',
    location: 'Chicago, IL',
    languages: ['English'],
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviewCount: 78,
    verified: false,
    availability: 'Available weekends'
  },
  {
    id: '6',
    name: 'Carlos Martinez',
    category: ['comedians'],
    bio: 'Stand-up comedian with appearances on major comedy networks',
    priceRange: '500-1000',
    location: 'Austin, TX',
    languages: ['English', 'Spanish'],
    image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviewCount: 91,
    verified: true,
    availability: 'Available'
  }
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    artistId: '1',
    artistName: 'Sarah Johnson',
    eventTitle: 'Corporate Gala 2025',
    eventDate: '2025-03-15',
    location: 'Manhattan, NY',
    status: 'confirmed',
    clientName: 'TechCorp Events',
    fee: 3500,
    createdAt: '2025-01-10'
  },
  {
    id: '2',
    artistId: '3',
    artistName: 'DJ Alex Rivera',
    eventTitle: 'Wedding Reception',
    eventDate: '2025-02-28',
    location: 'South Beach, FL',
    status: 'pending',
    clientName: 'Jennifer & Michael',
    fee: 7500,
    createdAt: '2025-01-12'
  },
  {
    id: '3',
    artistId: '4',
    artistName: 'Emily Chen',
    eventTitle: 'Leadership Conference',
    eventDate: '2025-04-10',
    location: 'Seattle Convention Center',
    status: 'confirmed',
    clientName: 'Future Leaders Inc',
    fee: 4000,
    createdAt: '2025-01-08'
  },
  {
    id: '4',
    artistId: '2',
    artistName: 'Marcus Thompson',
    eventTitle: 'Art Gallery Opening',
    eventDate: '2025-02-20',
    location: 'Beverly Hills, CA',
    status: 'rejected',
    clientName: 'Modern Art Gallery',
    fee: 2000,
    createdAt: '2025-01-14'
  }
];