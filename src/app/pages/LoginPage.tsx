import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';

export function LoginPage() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'customer';
  const [isLogin, setIsLogin] = useState(true);

  const getRoleTitle = () => {
    switch (role) {
      case 'farmer':
        return 'Farmer';
      case 'merchant':
        return 'Merchant';
      case 'customer':
        return 'Customer';
      default:
        return 'User';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-2xl text-gray-900">AgroMarket</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-600">
            {isLogin ? 'Sign in' : 'Sign up'} as a {getRoleTitle()}
          </p>
        </div>

        <Card className="p-8">
          <form className="space-y-6">
            {!isLogin && (
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>
            )}

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1"
              />
            </div>

            {!isLogin && (
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-1"
                />
              </div>
            )}

            {!isLogin && role === 'farmer' && (
              <>
                <div>
                  <Label htmlFor="farm-name">Farm Name</Label>
                  <Input
                    id="farm-name"
                    type="text"
                    placeholder="Enter your farm name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Enter your location"
                    className="mt-1"
                  />
                </div>
              </>
            )}

            {!isLogin && role === 'merchant' && (
              <>
                <div>
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input
                    id="business-name"
                    type="text"
                    placeholder="Enter your business name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="business-type">Business Type</Label>
                  <Input
                    id="business-type"
                    type="text"
                    placeholder="e.g., Restaurant, Grocery Store"
                    className="mt-1"
                  />
                </div>
              </>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm cursor-pointer">
                    Remember me
                  </Label>
                </div>
                <Link to="/forgot-password" className="text-sm text-green-600 hover:text-green-700">
                  Forgot password?
                </Link>
              </div>
            )}

            {!isLogin && (
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="text-green-600 hover:text-green-700">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-green-600 hover:text-green-700">
                    Privacy Policy
                  </a>
                </Label>
              </div>
            )}

            <Link to={`/dashboard/${role}`}>
              <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </Link>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link to="/role-selection" className="text-sm text-gray-600 hover:text-gray-900">
              ← Choose a different role
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
