import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const UpiIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" viewBox="0 0 64 64" width="24px" height="24px"><g id="surface1"><path style={{ fill: '#2196f3' }} d="M 33.265625 10.832031 C 28.535156 12.535156 25 16.890625 25 22 L 25 25.996094 C 25 32.625 30.375 37.996094 37 37.996094 L 43.195313 37.996094 C 41.527344 41.355469 37.9375 43.8125 33.785156 43.980469 C 27.085938 44.253906 21.464844 49.625 21.03125 56.324219 C 20.960938 57.207031 21.609375 58 22.5 58 L 44.511719 58 C 45.414063 58 46.066406 57.199219 46 56.308594 C 44.757813 49.199219 38.800781 43.996094 31.5 43.996094 L 28 43.996094 C 28 40.683594 30.683594 37.996094 34 37.996094 L 37 37.996094 C 43.625 37.996094 49 32.625 49 25.996094 L 49 22 C 49 15.371094 43.628906 10 37.003906 10 C 35.738281 10 34.507813 10.292969 33.414063 10.800781 Z M 33.265625 10.832031 "/><path style={{ fill: '#ffc107' }} d="M 46,6 C 45.101563,6.003906 44.441406,6.816406 44.511719,7.707031 C 45.742188,14.800781 51.699219,20.003906 59,20.003906 L 62,20.003906 C 62,23.316406 59.316406,26.003906 56,26.003906 L 53,26.003906 C 46.375,26.003906 41,31.375 41,38.003906 L 41,42 C 41,48.628906 46.371094,54 52.996094,54 C 54.261719,54 55.492188,53.707031 56.585938,53.199219 C 61.464844,50.871094 64.5,45.859375 64.5,40.1875 L 64.5,38.003906 C 64.5,31.375 59.125,26.003906 52.5,26.003906 L 46.804688,26.003906 C 48.472656,22.644531 52.0625,20.1875 56.214844,20.019531 C 62.914063,19.746094 68.535156,14.375 68.96875,7.675781 C 69.039063,6.792969 68.390625,6 67.5,6 Z M 46,6 "/><path style={{ fill: '#4caf50' }} d="M 12.414063 10.800781 C 11.320313 10.292969 10.09375 10 8.824219 10 C 2.199219 10 -3.128906 15.371094 -3.128906 22 L -3.128906 25.996094 C -3.128906 32.625 2.246094 37.996094 8.871094 37.996094 L 11.871094 37.996094 C 11.871094 41.3125 9.1875 43.996094 5.871094 43.996094 L 2.871094 43.996094 C -3.753906 43.996094 -9.128906 49.371094 -9.128906 56.003906 L -9.128906 58 L 13.128906 58 C 14.03125 58 14.683594 57.199219 14.621094 56.308594 C 13.378906 49.199219 7.421875 43.996094 0.121094 43.996094 C -0.414062 43.996094 -0.871094 43.539063 -0.871094 43 L -0.871094 42 C -0.871094 38.6875 1.8125 36 5.128906 36 L 8.871094 36 C 15.496094 36 20.871094 30.625 20.871094 24 L 20.871094 22 C 20.871094 16.890625 17.335938 12.535156 12.605469 10.832031 Z M 12.414063 10.800781 "/><path style={{ fill: '#f44336' }} d="M 12.5,6 C 13.402344,6.003906 14.0625,6.816406 13.988281,7.707031 C 13.558594,14.40625 7.933594,19.777344 1.234375,20.050781 C 0.351563,20.121094 -0.296875,19.472656 -0.296875,18.578125 L -0.296875,16 C -0.296875,9.371094 5.078125,4 11.703125,4 C 11.96875,4 12.234375,4.0625 12.5,4.125 Z M 12.5,6 "/></g></svg>
);


const CheckoutPage: React.FC = () => {
    const { cart, cartTotal, clearCart } = useAppContext();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'upi'

    useEffect(() => {
        if (cart.length === 0) {
            navigate('/products');
        }
    }, [cart, navigate]);
    
    const handlePayment = (e?: React.FormEvent) => {
        e?.preventDefault();
        setIsProcessing(true);
        
        // Simulate payment processing
        setTimeout(() => {
            clearCart();
            setIsProcessing(false);
            navigate('/order-success');
        }, 2000);
    };

    if (cart.length === 0) {
        return null;
    }

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Checkout</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Payment Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>
                        
                        <div className="flex border-b mb-6">
                            <button 
                                onClick={() => setPaymentMethod('card')}
                                className={`px-6 py-3 font-medium text-lg border-b-2 transition-colors ${paymentMethod === 'card' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                            >
                                Card
                            </button>
                            <button 
                                onClick={() => setPaymentMethod('upi')}
                                className={`px-6 py-3 font-medium text-lg border-b-2 transition-colors ${paymentMethod === 'upi' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                            >
                                UPI
                            </button>
                        </div>

                        {paymentMethod === 'card' && (
                            <form onSubmit={handlePayment} className="space-y-6">
                                <div>
                                    <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">Name on Card</label>
                                    <input type="text" id="card-name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" defaultValue="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
                                    <input type="text" id="card-number" placeholder="•••• •••• •••• ••••" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" defaultValue="4242 4242 4242 4242" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                        <input type="text" id="expiry-date" placeholder="MM / YY" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" defaultValue="12 / 25" />
                                    </div>
                                    <div>
                                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                                        <input type="text" id="cvc" placeholder="•••" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" defaultValue="123" />
                                    </div>
                                </div>
                                <button type="submit" disabled={isProcessing} className="w-full bg-primary text-white py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center">
                                    {isProcessing ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </>
                                    ) : (
                                        `Pay $${cartTotal.toFixed(2)}`
                                    )}
                                </button>
                            </form>
                        )}
                        
                        {paymentMethod === 'upi' && (
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600">Select your preferred UPI app to complete the payment.</p>
                                <div className="space-y-3">
                                    {['Google Pay', 'PhonePe', 'Paytm', 'Amazon Pay'].map(app => (
                                        <button key={app} onClick={() => handlePayment()} disabled={isProcessing} className="w-full flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-wait">
                                            <UpiIcon />
                                            <span className="ml-4 font-medium text-gray-700">{app}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                        </button>
                                    ))}
                                </div>
                                <button type="button" onClick={() => handlePayment()} disabled={isProcessing} className="mt-6 w-full bg-primary text-white py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center">
                                    {isProcessing ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </>
                                    ) : (
                                        `Pay $${cartTotal.toFixed(2)} with UPI`
                                    )}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-8 rounded-lg shadow-md h-fit">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Your Order</h2>
                        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                             {cart.map(item => (
                                <div key={item.product.id} className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img src={item.product.imageUrl} alt={item.product.name} className="w-16 h-16 object-cover rounded-md mr-4"/>
                                        <div>
                                            <p className="font-semibold text-gray-800">{item.product.name}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="font-medium text-gray-700">${(item.product.price * item.quantity).toFixed(2)}</p>
                                </div>
                             ))}
                        </div>
                        <div className="border-t mt-6 pt-4 space-y-2">
                             <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                             <div className="flex justify-between text-gray-600">
                                <span>Tax</span>
                                <span>$0.00</span>
                            </div>
                             <div className="flex justify-between font-bold text-lg text-gray-900 mt-2">
                                <span>Total</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;