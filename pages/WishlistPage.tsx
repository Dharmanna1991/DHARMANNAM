
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Product } from '../types';

const WishlistItemCard: React.FC<{ product: Product }> = ({ product }) => {
    const { removeFromWishlist, addToCart } = useAppContext();

    const handleAddToCart = () => {
        addToCart(product);
        removeFromWishlist(product.id);
    }
    
    return (
        <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow">
            <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover rounded-md mb-4 sm:mb-0" />
            <div className="sm:ml-6 flex-grow text-center sm:text-left">
                <Link to={`/product/${product.id}`} className="font-bold text-lg text-gray-800 hover:text-primary">{product.name}</Link>
                <p className="text-sm text-gray-500">{product.type}</p>
                <p className="text-xl font-semibold text-primary mt-2">${product.price.toFixed(2)}</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col space-y-2 w-full sm:w-auto">
                <button onClick={handleAddToCart} className="w-full bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm">Move to Cart</button>
                <button onClick={() => removeFromWishlist(product.id)} className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm">Remove</button>
            </div>
        </div>
    );
};

const WishlistPage: React.FC = () => {
    const { wishlist } = useAppContext();

    return (
        <div className="bg-gray-50 min-h-[calc(100vh-200px)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Your Wishlist</h1>
                {wishlist.length === 0 ? (
                    <div className="text-center bg-white p-12 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-gray-800">Your wishlist is empty.</h2>
                        <p className="text-gray-600 mt-2">Add items you love to your wishlist to save them for later.</p>
                        <Link to="/products" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors">
                            Discover Products
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {wishlist.map(product => (
                           <WishlistItemCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistPage;
