
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L1 9l4 1v9h5v-5h4v5h5V10l4-1-11-7zm0 2.23L18.97 9H5.03L12 4.23zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
    </svg>
    <span className="text-2xl font-extrabold text-gray-800">AcademicSorcess</span>
  </Link>
);

const NavLinks = ({ className }: { className?: string }) => (
  <nav className={`flex items-center space-x-6 ${className}`}>
    {['Home', 'Products', 'About', 'Services', 'Blog', 'Contact'].map(item => (
      <NavLink
        key={item}
        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
        className={({ isActive }) =>
          `text-gray-600 hover:text-primary transition-colors duration-200 font-medium pb-1 border-b-2 ${
            isActive ? 'border-primary text-primary' : 'border-transparent'
          }`
        }
      >
        {item}
      </NavLink>
    ))}
  </nav>
);

const UserActions = () => {
    const { cart, wishlist, isLoggedIn } = useAppContext();
    const navigate = useNavigate();
    
    return (
        <div className="flex items-center space-x-4">
            <button onClick={() => navigate('/wishlist')} className="relative text-gray-500 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
                {wishlist.length > 0 && <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{wishlist.length}</span>}
            </button>
            <button onClick={() => navigate('/cart')} className="relative text-gray-500 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cart.length}</span>}
            </button>
            {isLoggedIn ? (
                <button onClick={() => navigate('/profile')} className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://picsum.photos/seed/avatar/100/100" alt="User Avatar" />
                </button>
            ) : (
                <button onClick={() => navigate('/login')} className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm">
                    Login
                </button>
            )}
            <button onClick={() => navigate('/admin')} className="text-gray-500 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </button>
        </div>
    );
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${searchQuery}`);
        }
    }

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
                <Logo />
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-8">
                <NavLinks />
            </div>

            <div className="hidden lg:flex items-center space-x-4">
                 <form onSubmit={handleSearch} className="relative">
                    <input 
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-48 pl-4 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light transition-all duration-300"
                    />
                    <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </form>
                <UserActions />
            </div>
            
            <div className="lg:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-4">
                 <form onSubmit={handleSearch} className="relative">
                    <input 
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light"
                    />
                    <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </form>
                <nav className="flex flex-col space-y-3">
                    {['Home', 'Products', 'About', 'Services', 'Blog', 'Contact'].map(item => (
                        <NavLink key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary-light/20 text-primary-dark' : 'text-gray-700 hover:bg-gray-100'}`}>
                            {item}
                        </NavLink>
                    ))}
                </nav>
                 <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                     <UserActions />
                 </div>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;
