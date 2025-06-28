# 🎭 Artisly - Artist Booking Platform

A modern, full-stack web application for connecting event planners with world-class performing artists. Built with Next.js 13, TypeScript, and Tailwind CSS.

## 🌟 Project Overview

Artisly is a comprehensive artist booking platform that enables event planners to discover, filter, and book talented performers for various events. The platform features a beautiful, responsive design with advanced filtering capabilities, real-time booking management, and a robust dashboard for artists and event planners.

## 🚀 Live Demo

[View Live Demo](https://artistlyy.netlify.app/dashboard) 

## 🛠️ Technologies Used

### **Frontend Framework**
- **Next.js 13.5.1** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.2.2** - Type-safe JavaScript

### **Styling & UI**
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **Tailwind CSS Animate** - Animation utilities
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility for merging Tailwind classes

### **UI Components (shadcn/ui)**
- **Accordion, Alert, Avatar, Badge, Button, Card, Checkbox**
- **Dialog, Dropdown Menu, Form, Input, Label, Select**
- **Tabs, Toast, Tooltip, and 30+ more components**

### **Form Handling & Validation**
- **React Hook Form 7.53.0** - Form state management
- **Zod 3.23.8** - Schema validation
- **@hookform/resolvers 3.9.0** - Form validation resolvers

### **State Management**
- **React Context API** - Global state management
- **Custom hooks** - Reusable state logic

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### **Additional Libraries**
- **date-fns 3.6.0** - Date manipulation
- **recharts 2.12.7** - Chart components
- **sonner 1.5.0** - Toast notifications
- **cmdk 1.0.0** - Command palette
- **embla-carousel-react 8.3.0** - Carousel component
- **react-day-picker 8.10.1** - Date picker
- **react-resizable-panels 2.1.3** - Resizable panels
- **vaul 0.9.9** - Drawer component
- **input-otp 1.2.4** - OTP input component

## 📁 Project Structure

```
artistly/
├── 📁 app/                          # Next.js App Router pages
│   ├── 📄 layout.tsx               # Root layout with metadata
│   ├── 📄 page.tsx                 # Homepage with hero and features
│   ├── 📄 globals.css              # Global styles and CSS variables
│   ├── 📁 artists/
│   │   └── 📄 page.tsx             # Artist listing page
│   ├── 📁 dashboard/
│   │   └── 📄 page.tsx             # Artist dashboard
│   └── 📁 onboard/
│       └── 📄 page_disabled.tsx    # Artist registration form
├── 📁 components/                   # Reusable React components
│   ├── 📄 Header.tsx               # Navigation header
│   ├── 📄 Footer.tsx               # Site footer
│   ├── 📄 Hero.tsx                 # Hero section component
│   ├── 📄 ArtistCard.tsx           # Artist profile card
│   ├── 📄 CategoryCard.tsx         # Category display card
│   ├── 📄 FilterSection.tsx        # Search and filter interface
│   └── 📁 ui/                      # shadcn/ui components (40+ files)
│       ├── 📄 button.tsx           # Button component
│       ├── 📄 card.tsx             # Card component
│       ├── 📄 input.tsx            # Input component
│       ├── 📄 select.tsx           # Select dropdown
│       ├── 📄 tabs.tsx             # Tab navigation
│       ├── 📄 toast.tsx            # Toast notifications
│       └── ... (35+ more UI components)
├── 📁 context/                     # React Context providers
│   └── 📄 AppContext.tsx           # Global app state management
├── 📁 hooks/                       # Custom React hooks
│   └── 📄 use-toast.ts             # Toast notification hook
├── 📁 lib/                         # Utility libraries
│   ├── 📄 utils.ts                 # Utility functions (cn, clsx)
│   └── 📄 mockData.ts              # Mock data for artists and bookings
├── 📄 package.json                 # Dependencies and scripts
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 tailwind.config.ts           # Tailwind CSS configuration
├── 📄 next.config.js               # Next.js configuration
├── 📄 components.json              # shadcn/ui configuration
└── 📄 README.md                    # Project documentation
```

## 🎯 Key Features

### **1. Artist Discovery & Browsing**
- **Advanced Search**: Search by artist name, bio, categories, and location
- **Smart Filtering**: Filter by category, location, price range, and availability
- **Grid/List Views**: Toggle between different viewing modes
- **Real-time Results**: Instant filtering and search results

### **2. Artist Profiles**
- **Comprehensive Information**: Bio, categories, languages, pricing, location
- **Verification System**: Verified artist badges
- **Rating & Reviews**: Star ratings and review counts
- **Availability Status**: Real-time availability indicators
- **Professional Images**: High-quality artist photos

### **3. Booking Management**
- **Quote Requests**: Easy quote request system
- **Booking Dashboard**: Track booking status and history
- **Status Management**: Pending, confirmed, and rejected bookings
- **Revenue Tracking**: Financial analytics and reporting

### **4. Artist Onboarding**
- **Multi-step Registration**: 4-step onboarding process
- **Form Validation**: Comprehensive validation with Zod
- **Image Upload**: Profile photo upload with preview
- **Category Selection**: Multiple category selection
- **Progress Tracking**: Visual progress indicator

### **5. Dashboard Analytics**
- **Booking Statistics**: Total bookings, confirmed, pending counts
- **Revenue Analytics**: Total revenue and growth metrics
- **Performance Tracking**: Success rates and trends
- **Booking Management**: Accept/decline booking requests

### **6. Responsive Design**
- **Mobile-First**: Optimized for all device sizes
- **Modern UI**: Clean, professional design
- **Accessibility**: WCAG compliant components
- **Dark Mode Ready**: CSS variables for theming

## 🎨 Design System

### **Color Palette**
- **Primary**: Purple gradient (`from-purple-600 to-blue-600`)
- **Secondary**: Gray scale with proper contrast
- **Accent**: Yellow/Orange for highlights
- **Success**: Green for positive actions
- **Warning**: Yellow for pending states
- **Error**: Red for destructive actions

### **Typography**
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight for readability
- **Responsive**: Scalable font sizes

### **Components**
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean inputs with validation states
- **Navigation**: Sticky header with mobile menu

## 🔧 Configuration Files

### **Next.js Config** (`next.config.js`)
```javascript
{
  output: 'export',           // Static export for deployment
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true }
}
```

### **Tailwind Config** (`tailwind.config.ts`)
- Custom color palette with CSS variables
- Extended border radius and animations
- Dark mode support
- Custom keyframes for accordion animations

### **TypeScript Config** (`tsconfig.json`)
- Strict type checking enabled
- Path aliases for clean imports
- Next.js plugin integration
- ES5 target for broad compatibility

### **shadcn/ui Config** (`components.json`)
- Default style with RSC support
- Tailwind CSS integration
- Custom path aliases
- CSS variables for theming

## 📊 Data Models

### **Artist Interface**
```typescript
interface Artist {
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
```

### **Booking Interface**
```typescript
interface Booking {
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
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn package manager

### **Installation**
```bash
# Clone the repository
git clone https://github.com/your-username/artistly.git
cd artistly

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### **Environment Setup**
The project uses static export, so no environment variables are required for basic functionality.

## 🎯 Key Components Breakdown

### **AppContext** (`context/AppContext.tsx`)
- Global state management for artists and bookings
- Search and filter functionality
- CRUD operations for artists and bookings
- Real-time filtering with multiple criteria

### **Hero Component** (`components/Hero.tsx`)
- Animated hero section with gradient background
- Search functionality with backdrop blur
- Call-to-action buttons
- Statistics display

### **FilterSection** (`components/FilterSection.tsx`)
- Advanced search and filtering interface
- Category, location, and price range filters
- Active filter badges with removal
- Collapsible filter panel

### **ArtistCard** (`components/ArtistCard.tsx`)
- Professional artist profile display
- Rating and verification badges
- Category tags and language display
- Quote request functionality

### **Dashboard** (`app/dashboard/page.tsx`)
- Comprehensive booking management
- Analytics and statistics
- Tabbed interface for different sections
- Booking action buttons

## 🔮 Future Enhancements

### **Planned Features**
- **Real-time Chat**: Artist-client messaging system
- **Payment Integration**: Stripe/PayPal payment processing
- **Calendar Integration**: Google Calendar sync
- **Review System**: Detailed review and rating system
- **Notification System**: Email and push notifications
- **Analytics Dashboard**: Advanced analytics and reporting
- **Mobile App**: React Native mobile application
- **API Integration**: RESTful API for third-party integrations

### **Technical Improvements**
- **Database Integration**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with multiple providers
- **File Upload**: Cloud storage integration (AWS S3)
- **Search Engine**: Elasticsearch for advanced search
- **Caching**: Redis for performance optimization
- **Testing**: Jest and React Testing Library
- **CI/CD**: GitHub Actions for automated deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 
