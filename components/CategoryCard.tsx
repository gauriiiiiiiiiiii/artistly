import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: string;
    description: string;
  };
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link 
      href={`/artists?category=${category.id}`}
      className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-4xl mb-4">{category.icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
        {category.name}
      </h3>
      <p className="text-gray-600 mb-4">{category.description}</p>
      <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
        Explore {category.name.toLowerCase()}
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}