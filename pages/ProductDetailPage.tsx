
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useAppContext } from '../context/AppContext';

const StarRating: React.FC<{ rating: number, size?: string }> = ({ rating, size = 'h-5 w-5' }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg key={i} className={`${size} ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex items-center">{stars}</div>;
};

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useAppContext();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  const isWished = isInWishlist(product.id);

  const handleWishlistClick = () => {
    if (isWished) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>

          {/* Product Details */}
          <div>
            <span className="inline-block bg-primary-light/20 text-primary-dark text-sm font-semibold px-3 py-1 rounded-full mb-2">{product.type}</span>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">By {product.author}</p>
            
            <div className="flex items-center mb-6">
              <StarRating rating={product.rating} size="h-6 w-6"/>
              <span className="text-gray-600 ml-3 text-lg">({product.reviewsCount} reviews)</span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.description}</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                    <div><strong className="text-gray-700">Subject:</strong> {product.subject}</div>
                    <div><strong className="text-gray-700">University:</strong> {product.university}</div>
                    <div><strong className="text-gray-700">Pages:</strong> {product.pages}</div>
                    <div><strong className="text-gray-700">Format:</strong> {product.type}</div>
                </div>
            </div>

            <p className="text-5xl font-bold text-primary mb-8">${product.price}</p>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => addToCart(product, quantity)}
                className="flex-grow bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span>Add to Cart</span>
              </button>
              <button onClick={handleWishlistClick} className="bg-gray-200 text-gray-700 rounded-lg p-3 hover:bg-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill={isWished ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isWished ? 0 : 2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 pt-10 border-t">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Customer Reviews</h2>
          {/* Placeholder for reviews. In a real app, this would be dynamic. */}
          <div className="space-y-6">
            <div className="border-b pb-4">
                <div className="flex items-center mb-2">
                    <StarRating rating={5} />
                    <p className="ml-4 font-bold">Excellent Resource!</p>
                </div>
                <p className="text-gray-600">This was exactly what I needed for my final exams. So well-organized and easy to follow.</p>
                <p className="text-sm text-gray-400 mt-2">- Alex Johnson on Nov 10, 2023</p>
            </div>
            <div className="border-b pb-4">
                <div className="flex items-center mb-2">
                    <StarRating rating={4} />
                    <p className="ml-4 font-bold">Very Helpful</p>
                </div>
                <p className="text-gray-600">Saved me a lot of time. A few sections could be more detailed, but overall a great buy.</p>
                <p className="text-sm text-gray-400 mt-2">- Samantha Lee on Oct 25, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
