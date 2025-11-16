
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { Product, ProductType } from '../types';

const ProductListPage: React.FC = () => {
  const { products } = useAppContext();
  const [searchParams] = useSearchParams();
  
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    type: 'All',
    subject: 'All',
    university: 'All',
    sortBy: 'rating',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product: Product) => {
      const searchMatch = product.name.toLowerCase().includes(filters.search.toLowerCase()) || product.description.toLowerCase().includes(filters.search.toLowerCase());
      const typeMatch = filters.type === 'All' || product.type === filters.type;
      const subjectMatch = filters.subject === 'All' || product.subject === filters.subject;
      const universityMatch = filters.university === 'All' || product.university === filters.university;
      return searchMatch && typeMatch && subjectMatch && universityMatch;
    });

    return filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price_asc':
          return a.price - b.price;
        case 'price_desc':
          return b.price - a.price;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
  }, [products, filters]);

  const uniqueSubjects = ['All', ...Array.from(new Set(products.map(p => p.subject)))];
  const uniqueUniversities = ['All', ...Array.from(new Set(products.map(p => p.university)))];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">Our Products</h1>
        <p className="text-lg text-gray-600 text-center mb-10">Find the perfect academic resources to boost your grades.</p>
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8 sticky top-20 z-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div className="lg:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</label>
              <input type="text" id="search" name="search" value={filters.search} onChange={handleFilterChange} placeholder="e.g., Calculus, Python..." className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"/>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
              <select id="type" name="type" value={filters.type} onChange={handleFilterChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                <option>All</option>
                {Object.values(ProductType).map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
             <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <select id="subject" name="subject" value={filters.subject} onChange={handleFilterChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                {uniqueSubjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700">Sort By</label>
              <select id="sortBy" name="sortBy" value={filters.sortBy} onChange={handleFilterChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800">No Products Found</h2>
                <p className="text-gray-600 mt-2">Try adjusting your search or filter criteria.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
