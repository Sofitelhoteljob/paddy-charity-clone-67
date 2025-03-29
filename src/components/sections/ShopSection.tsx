
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, oldPrice, image, isNew, isSale }) => {
  return (
    <div className="bg-charity-light rounded-lg overflow-hidden shadow-md">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {isNew && (
          <div className="absolute top-2 left-2 bg-charity-green text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
        {isSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-medium text-lg mb-2">{name}</h3>
        <div className="flex justify-center items-center space-x-2">
          <span className="font-bold text-charity-dark">${price.toFixed(2)}</span>
          {oldPrice && (
            <span className="text-gray-500 line-through">${oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const ShopSection = () => {
  const products = [
    {
      name: "Hermes Handbag",
      price: 399.00,
      oldPrice: 450.00,
      image: "/placeholder.svg",
      isSale: true
    },
    {
      name: "Light Blue Wedding Shoes",
      price: 125.00,
      image: "/placeholder.svg",
      isNew: true
    },
    {
      name: "Hermes Kelly Bag",
      price: 499.00,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">CHARITY SHOP</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            All proceeds from our shop directly support our charity programs. Shop with purpose and make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              image={product.image}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10 space-x-2">
          <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
