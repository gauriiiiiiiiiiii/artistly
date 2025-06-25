import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Shield, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Verified Artists',
      description: 'All artists are thoroughly vetted with verified credentials and performance history.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: 'Easy Booking',
      description: 'Streamlined booking process with instant quotes and availability checking.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Secure Payments',
      description: 'Protected transactions with escrow services and money-back guarantee.'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: 'Quality Guarantee',
      description: 'Every performance is backed by our quality guarantee and 24/7 support.'
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Artist Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate acoustic performances to high-energy entertainment, 
              find the perfect artist for your event.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/artists">
              <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                View All Artists
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Artistly?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make artist booking simple, secure, and successful for everyone involved.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of event planners and artists who trust Artistly 
            to make their events unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artists">
              <Button size="lg" className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
                Find Artists
              </Button>
            </Link>
            <Link href="/onboard">
              <Button size="lg" variant="outline" className="px-8 py-4 border-white/30 text-white hover:bg-white/10">
                Join as Artist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}