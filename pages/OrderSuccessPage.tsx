
import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccessPage: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
                <div className="text-center bg-white p-12 rounded-lg shadow-xl max-w-lg">
                    <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
                        <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Payment Successful!</h1>
                    <p className="text-gray-600 text-lg mb-8">
                        Thank you for your purchase. You will receive an email confirmation with your order details and download links shortly.
                    </p>
                    <Link 
                        to="/products" 
                        className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors text-lg"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccessPage;
