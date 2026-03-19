import { Package, ShoppingCart, DollarSign, TrendingUp, Plus, Edit, Trash2 } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { products } from '../data/mockData';

export function FarmerDashboard() {
  const myProducts = products.slice(0, 3);
  
  const stats = [
    { label: 'Total Products', value: '24', icon: Package },
    { label: 'Total Orders', value: '156', icon: ShoppingCart },
    { label: 'Total Revenue', value: '$12,450', icon: DollarSign },
    { label: 'Growth', value: '+23%', icon: TrendingUp },
  ];

  const recentOrders = [
    { id: '1', product: 'Organic Tomatoes', customer: 'John Smith', amount: '$24.99', status: 'Pending', date: 'Mar 18, 2026' },
    { id: '2', product: 'Fresh Lettuce', customer: 'Sarah Wilson', amount: '$14.99', status: 'Shipped', date: 'Mar 17, 2026' },
    { id: '3', product: 'Mixed Vegetables', customer: 'Mike Johnson', amount: '$32.99', status: 'Delivered', date: 'Mar 16, 2026' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Farmer Dashboard</h1>
            <p className="text-lg text-gray-600">Welcome back, Sarah Johnson!</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="h-5 w-5 mr-2" />
            Add New Product
          </Button>
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* My Products */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">My Products</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>

            <div className="space-y-4">
              {myProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">${product.price} / {product.unit}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Orders */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Orders</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{order.product}</h3>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                    <Badge
                      className={
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{order.date}</span>
                    <span className="font-semibold text-green-600">{order.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Product Management Section */}
        <Card className="p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <Plus className="h-6 w-6" />
              <span>Add Product</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <Package className="h-6 w-6" />
              <span>Manage Inventory</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <ShoppingCart className="h-6 w-6" />
              <span>View Orders</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6" />
              <span>Analytics</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}