import { Link } from 'react-router';
import { ShoppingBag, Heart, MapPin, Clock } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { products } from '../data/mockData';

export function CustomerDashboard() {
  const stats = [
    { label: 'Total Orders', value: '23', icon: ShoppingBag },
    { label: 'Favorites', value: '12', icon: Heart },
    { label: 'Active Orders', value: '3', icon: Clock },
  ];

  const recentOrders = [
    { id: '1', product: 'Organic Tomatoes', farmer: 'Sarah Johnson', amount: '$24.99', status: 'Delivered', date: 'Mar 15, 2026', image: products[0].image },
    { id: '2', product: 'Sweet Corn', farmer: 'Michael Chen', amount: '$17.49', status: 'In Transit', date: 'Mar 17, 2026', image: products[1].image },
    { id: '3', product: 'Fresh Herbs Bundle', farmer: 'Emily Rodriguez', amount: '$8.99', status: 'Processing', date: 'Mar 18, 2026', image: products[4].image },
  ];

  const favoriteProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Dashboard</h1>
            <p className="text-lg text-gray-600">Welcome back, Jennifer Martinez!</p>
          </div>
          <Link to="/marketplace">
            <Button className="bg-green-600 hover:bg-green-700">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Shop Now
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
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
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Orders</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex gap-4">
                      <img
                        src={order.image}
                        alt={order.product}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{order.product}</h3>
                            <p className="text-sm text-gray-600">From: {order.farmer}</p>
                          </div>
                          <Badge
                            className={
                              order.status === 'Delivered'
                                ? 'bg-green-100 text-green-700'
                                : order.status === 'In Transit'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center text-sm mt-2">
                          <span className="text-gray-500">{order.date}</span>
                          <span className="font-semibold text-green-600">{order.amount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  Track Your Orders
                </Button>
              </div>
            </Card>
          </div>

          {/* Delivery Address */}
          <Card className="p-6 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Address</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Home</p>
                    <p className="text-sm text-gray-600">
                      123 Maple Street<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                    <Badge className="mt-2 bg-green-600">Default</Badge>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Manage Addresses
              </Button>
            </div>
          </Card>
        </div>

        {/* Favorite Products */}
        <Card className="p-6 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Favorites</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {favoriteProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover"
                    />
                    <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                    </button>
                  </div>
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
              </Link>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/marketplace">
              <Button variant="outline" className="h-24 w-full flex flex-col items-center justify-center gap-2">
                <ShoppingBag className="h-6 w-6" />
                <span>Browse Products</span>
              </Button>
            </Link>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <Heart className="h-6 w-6" />
              <span>My Favorites</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <Clock className="h-6 w-6" />
              <span>Order History</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <MapPin className="h-6 w-6" />
              <span>Addresses</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}