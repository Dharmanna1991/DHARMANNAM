
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, TESTIMONIALS, BLOG_POSTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Testimonial } from '../types';

const Hero: React.FC = () => (
  <div className="bg-secondary-light">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Unlock Your Academic Potential
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        High-quality e-books, study notes, and presentations curated by experts to help you excel in your studies.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <Link to="/products" className="bg-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-primary-dark transition-transform hover:scale-105 shadow-lg">
          Browse Products
        </Link>
        <Link to="/about" className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform hover:scale-105 shadow-lg border border-gray-200">
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode; bgColor?: string }> = ({ title, children, bgColor="bg-white" }) => (
    <div className={bgColor}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{title}</h2>
            {children}
        </div>
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full">
        <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 ring-4 ring-primary-light/50" />
        <p className="text-gray-600 italic mb-4 flex-grow">"{testimonial.quote}"</p>
        <div>
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-primary">{testimonial.role}</p>
        </div>
    </div>
);

const BlogPreviewCard: React.FC<{ post: typeof BLOG_POSTS[0] }> = ({ post }) => (
    <Link to={`/blog`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
         <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
         <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
            <span className="font-semibold text-primary group-hover:underline">Read More &rarr;</span>
         </div>
    </Link>
)

const HomePage: React.FC = () => {
  const bestSellers = PRODUCTS.slice(0, 4);
  const newArrivals = PRODUCTS.slice(0,4).reverse();

  return (
    <div>
      <Hero />

      <Section title="Best Sellers">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
      
      <Section title="What Our Students Say" bgColor="bg-secondary-light">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map(testimonial => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
          </div>
      </Section>

      <Section title="New Arrivals">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <Section title="From Our Blog" bgColor="bg-secondary-light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map(post => (
            <BlogPreviewCard key={post.id} post={post} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
