import { Star, MapPin, CheckCircle, Package } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { farmers } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function FarmersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Farmers</h1>
            <p className="text-xl text-gray-600">
              Meet the dedicated farmers who bring fresh, quality products to your table
            </p>
          </div>
        </div>
      </section>

      {/* Farmers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {farmers.map((farmer) => (
              <Card key={farmer.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <ImageWithFallback
                    src={farmer.image}
                    alt={farmer.name}
                    className="w-full h-full object-cover"
                  />
                  {farmer.verified && (
                    <Badge className="absolute top-4 right-4 bg-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{farmer.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 font-semibold">{farmer.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center text-gray-600">
                      <Package className="h-4 w-4 mr-1" />
                      {farmer.products} products
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{farmer.specialty}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {farmer.location}
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    View Profile
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Farmers
            </Button>
          </div>
        </div>
      </section>

      {/* Become a Farmer CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Are You a Farmer?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join our community and start selling your products directly to customers and merchants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Join as a Farmer
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Why Our Farmers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Our Farmers Stand Out</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Quality</h3>
              <p className="text-gray-600">
                All our farmers are verified and follow strict quality standards to ensure the best products.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Practices</h3>
              <p className="text-gray-600">
                Our farmers use eco-friendly and sustainable farming methods to protect the environment.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passionate Growers</h3>
              <p className="text-gray-600">
                Each farmer brings years of experience and dedication to growing the finest produce.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
