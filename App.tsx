
import React from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';

// Import Layouts
import Header from './components/Header';
import Footer from './components/Footer';
import AdminLayout from './pages/admin/AdminLayout';

// Import Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';


// Import Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminOrders from './pages/admin/AdminOrders';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';

const PublicLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const AppContent: React.FC = () => {
    const { theme } = useAppContext();
    const location = useLocation();
    
    React.useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--color-primary-light', theme.colors.primary.light);
        root.style.setProperty('--color-primary-default', theme.colors.primary.default);
        root.style.setProperty('--color-primary-dark', theme.colors.primary.dark);
        root.style.setProperty('--color-secondary-light', theme.colors.secondary.light);
        root.style.setProperty('--color-secondary-default', theme.colors.secondary.default);
        root.style.setProperty('--color-secondary-dark', theme.colors.secondary.dark);
    }, [theme]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="products" element={<ProductListPage />} />
                <Route path="product/:id" element={<ProductDetailPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="wishlist" element={<WishlistPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="order-success" element={<OrderSuccessPage />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="settings" element={<AdminSettings />} />
            </Route>
        </Routes>
    );
}

const App: React.FC = () => {
  return (
    <AppProvider>
        <HashRouter>
            <AppContent />
        </HashRouter>
    </AppProvider>
  );
};

export default App;
