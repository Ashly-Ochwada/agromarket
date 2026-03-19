import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { MarketplacePage } from './pages/MarketplacePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { RoleSelectionPage } from './pages/RoleSelectionPage';
import { LoginPage } from './pages/LoginPage';
import { FarmerDashboard } from './pages/FarmerDashboard';
import { MerchantDashboard } from './pages/MerchantDashboard';
import { CustomerDashboard } from './pages/CustomerDashboard';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { FarmersPage } from './pages/FarmersPage';

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="text-green-600 hover:text-green-700 font-medium">
          Go back home
        </a>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'marketplace', Component: MarketplacePage },
      { path: 'product/:id', Component: ProductDetailPage },
      { path: 'categories', Component: CategoriesPage },
      { path: 'farmers', Component: FarmersPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      { path: 'role-selection', Component: RoleSelectionPage },
      { path: 'login', Component: LoginPage },
      { path: 'dashboard/farmer', Component: FarmerDashboard },
      { path: 'dashboard/merchant', Component: MerchantDashboard },
      { path: 'dashboard/customer', Component: CustomerDashboard },
      { path: '*', Component: NotFound },
    ],
  },
]);
