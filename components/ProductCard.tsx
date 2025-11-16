
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useAppContext } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex items-center">{stars}</div>;
};


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useAppContext();
    const isWished = isInWishlist(product.id);
    
    const handleWishlistClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if(isWished) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    }

    const handleAddToCartClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    }
    
  return (
    <Link to={`/product/${product.id}`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        <button onClick={handleWishlistClick} className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-500 hover:text-red-500 hover:bg-white transition-all duration-200">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isWished ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isWished ? 0 : 2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
           </svg>
        </button>
      </div>
      <div className="p-4">
        <span className="inline-block bg-primary-light/20 text-primary-dark text-xs font-semibold px-2 py-1 rounded-full mb-2">{product.type}</span>
        <h3 className="text-lg font-bold text-gray-800 truncate group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.subject}</p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <StarRating rating={product.rating} />
            <span className="text-xs text-gray-500 ml-2">({product.reviewsCount})</span>
          </div>
          <p className="text-xl font-extrabold text-primary">${product.price}</p>
        </div>
        <button 
          onClick={handleAddToCartClick}
          className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
