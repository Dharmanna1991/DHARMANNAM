
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ORDERS } from '../constants';

const ProfilePage: React.FC = () => {
    const { logout } = useAppContext();
    const navigate = useNavigate();
    const userOrders = ORDERS.filter(order => order.userId === '2');

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">My Account</h1>
                    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors text-sm">
                        Logout
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Profile Info */}
                    <div className="md:col-span-1 bg-white p-6 rounded-lg shadow h-fit">
                         <div className="flex flex-col items-center">
                            <img src="https://picsum.photos/seed/avatar/150/150" alt="User Avatar" className="w-24 h-24 rounded-full mb-4 ring-4 ring-primary-light" />
                            <h2 className="text-2xl font-bold">John Doe</h2>
                            <p className="text-gray-600">john.doe@example.com</p>
                        </div>
                        <div className="mt-6 border-t pt-4 text-sm text-gray-700 space-y-2">
                           <p><strong>Member since:</strong> May 10, 2023</p>
                           <p><strong>Total Orders:</strong> {userOrders.length}</p>
                        </div>
                    </div>
                    
                    {/* Order History */}
                    <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-bold mb-6">Order History</h3>
                        <div className="space-y-4">
                            {userOrders.map(order => (
                                <div key={order.id} className="border p-4 rounded-md">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-bold text-lg">Order #{order.id}</p>
                                            <p className="text-sm text-gray-500">{order.date}</p>
                                        </div>
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                            order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                            order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>{order.status}</span>
                                    </div>
                                    <div className="mt-4 border-t pt-2">
                                        {order.items.map(item => (
                                            <div key={item.productId} className="flex justify-between text-sm text-gray-600">
                                                <span>{item.productName} x{item.quantity}</span>
                                                <span>${item.price.toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-right font-bold mt-2">Total: ${order.total.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
