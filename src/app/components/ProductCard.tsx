import { Link } from 'react-router';
import { MapPin, Star, ShoppingCart, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { Product } from '../data/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
        {/* Product Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.seller.verified && (
            <Badge className="absolute top-2 right-2 bg-green-600">
              <CheckCircle className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          )}
          {product.freshness && (
            <Badge className="absolute top-2 left-2 bg-orange-500">
              {product.freshness}
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
          
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-gray-600 ml-1">{product.seller.rating}</span>
            </div>
            <span className="text-sm text-gray-400">({product.reviews})</span>
          </div>

          <p className="text-sm text-gray-600 mb-2">{product.seller.name}</p>

          <div className="flex items-center text-sm text-gray-500 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            {product.location}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-green-600">${product.price}</span>
              <span className="text-sm text-gray-500 ml-1">/ {product.unit}</span>
            </div>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic
              }}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
