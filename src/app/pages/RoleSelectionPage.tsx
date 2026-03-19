import { Link } from 'react-router';
import { Leaf, Store, ShoppingBag } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function RoleSelectionPage() {
  const roles = [
    {
      id: 'farmer',
      icon: Leaf,
      title: 'I am a Farmer',
      description: 'Sell your fresh produce directly to customers and merchants',
      features: [
        'List your products easily',
        'Manage orders and inventory',
        'Connect with buyers directly',
        'Get fair prices for your products',
      ],
      link: '/login?role=farmer',
    },
    {
      id: 'merchant',
      icon: Store,
      title: 'I am a Merchant',
      description: 'Source fresh agricultural products in bulk for your business',
      features: [
        'Browse products from multiple farmers',
        'Bulk purchasing options',
        'Reliable supply chain',
        'Competitive pricing',
      ],
      link: '/login?role=merchant',
    },
    {
      id: 'customer',
      icon: ShoppingBag,
      title: 'I am a Customer',
      description: 'Buy fresh, organic products directly from local farmers',
      features: [
        'Wide variety of fresh products',
        'Support local farmers',
        'Quality guaranteed',
        'Convenient delivery',
      ],
      link: '/login?role=customer',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join AgroMarket
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your role to get started and become part of our growing agricultural community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.id}
                className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-green-500"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-green-100">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {role.title}
                </h2>
                <p className="text-gray-600 mb-6">{role.description}</p>

                <ul className="space-y-3 mb-8">
                  {role.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <svg
                        className="h-5 w-5 text-green-600 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={role.link}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Continue as {role.id.charAt(0).toUpperCase() + role.id.slice(1)}
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}