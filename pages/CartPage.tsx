
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity, cartTotal } = useAppContext();

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-200px)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center bg-white p-12 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800">Your cart is empty.</h2>
            <p className="text-gray-600 mt-2">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow space-y-4">
              {cart.map(item => (
                <div key={item.product.id} className="flex items-center border-b pb-4 last:border-b-0">
                  <img src={item.product.imageUrl} alt={item.product.name} className="w-24 h-24 object-cover rounded-md" />
                  <div className="ml-4 flex-grow">
                    <Link to={`/product/${item.product.id}`} className="font-bold text-lg text-gray-800 hover:text-primary">{item.product.name}</Link>
                    <p className="text-sm text-gray-500">{item.product.type}</p>
                    <p className="text-md font-semibold text-primary mt-1">${item.product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input 
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateCartQuantity(item.product.id, parseInt(e.target.value))}
                      className="w-16 text-center border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                    <button onClick={() => removeFromCart(item.product.id)} className="text-gray-500 hover:text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow h-fit">
              <h2 className="text-xl font-bold border-b pb-4 mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="mt-6 block w-full text-center bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
