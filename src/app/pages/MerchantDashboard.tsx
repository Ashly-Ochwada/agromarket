import { Link } from 'react-router';
import { ShoppingCart, Package, Users, TrendingUp, Search } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { products, farmers } from '../data/mockData';

export function MerchantDashboard() {
  const stats = [
    { label: 'Active Orders', value: '42', icon: ShoppingCart },
    { label: 'Total Purchases', value: '284', icon: Package },
    { label: 'Suppliers', value: '18', icon: Users },
    { label: 'Savings', value: '$8,240', icon: TrendingUp },
  ];

  const recentPurchases = [
    { id: '1', product: 'Premium Wheat', farmer: 'Michael Chen', amount: '$450.00', quantity: '50 lb', status: 'Shipped', date: 'Mar 18, 2026' },
    { id: '2', product: 'Organic Rice', farmer: 'Emily Rodriguez', amount: '$389.99', quantity: '25 lb', status: 'Processing', date: 'Mar 17, 2026' },
    { id: '3', product: 'Fresh Vegetables', farmer: 'Sarah Johnson', amount: '$129.99', quantity: '10 boxes', status: 'Delivered', date: 'Mar 16, 2026' },
  ];

  const suggestedProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Merchant Dashboard</h1>
            <p className="text-lg text-gray-600">Welcome back, David Thompson!</p>
          </div>
          <Link to="/marketplace">
            <Button className="bg-green-600 hover:bg-green-700">
              <Search className="h-5 w-5 mr-2" />
              Browse Marketplace
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Purchases */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Purchases</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>

              <div className="space-y-4">
                {recentPurchases.map((purchase) => (
                  <div key={purchase.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{purchase.product}</h3>
                        <p className="text-sm text-gray-600">From: {purchase.farmer}</p>
                        <p className="text-sm text-gray-500">Quantity: {purchase.quantity}</p>
                      </div>
                      <Badge
                        className={
                          purchase.status === 'Delivered'
                            ? 'bg-green-100 text-green-700'
                            : purchase.status === 'Shipped'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }
                      >
                        {purchase.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{purchase.date}</span>
                      <span className="font-semibold text-green-600">{purchase.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Top Suppliers */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Top Suppliers</h2>
            </div>

            <div className="space-y-4">
              {farmers.map((farmer) => (
                <div key={farmer.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <img
                    src={farmer.image}
                    alt={farmer.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-gray-900">{farmer.name}</h3>
                    <p className="text-xs text-gray-600">{farmer.specialty}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs text-yellow-600">★ {farmer.rating}</span>
                      {farmer.verified && (
                        <span className="text-xs text-green-600">✓</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Suggested Products */}
        <Card className="p-6 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Suggested for Bulk Purchase</h2>
            <Link to="/marketplace">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {suggestedProducts.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.seller.name}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">${product.price}</span>
                    <span className="text-sm text-gray-500">/ {product.unit}</span>
                  </div>
                  <Button size="sm" className="w-full mt-3 bg-green-600 hover:bg-green-700">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/marketplace">
              <Button variant="outline" className="h-24 w-full flex flex-col items-center justify-center gap-2">
                <Search className="h-6 w-6" />
                <span>Browse Products</span>
              </Button>
            </Link>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <ShoppingCart className="h-6 w-6" />
              <span>View Cart</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <Package className="h-6 w-6" />
              <span>Order History</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <Users className="h-6 w-6" />
              <span>Manage Suppliers</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}