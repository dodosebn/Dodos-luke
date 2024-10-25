import React from "react";
import { Link } from "react-router-dom";

const popularProductData = [
  {
    id: "1234",
    product_name: "Ford in wild",
    product_thumbnell:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    product_price: "$1333",
    product_stack: 34,
  },
  {
    id: "5678",
    product_name: "Gaming Wild",
    product_thumbnell:
      "https://media.istockphoto.com/id/1953265983/photo/straight-road-from-above.jpg?s=1024x1024&w=is&k=20&c=yHcQzuc7G0Gs93Z9ParQU1s40Vg1NjuPVgF5dCd2oU8=",
    product_price: "$2255",
    product_stack: 120,
  },
  {
    id: "9101",
    product_name: "speedo",
    product_thumbnell:
      "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    product_price: "$3389",
    product_stack: 50,
  },
  {
    id: "1121",
    product_name: "Red car",
    product_thumbnell:
      "https://media.istockphoto.com/id/1138785358/photo/generic-red-car-top-angle.jpg?s=1024x1024&w=is&k=20&c=0C2iojEkacO6YGCargMhh3Q4F9GiNq4ndfSKmoNT3ac=",
    product_price: "$2499",
    product_stack: 20,
  },
  {
    id: "5161",
    product_name: "Latest E-class",
    product_thumbnell:
      "https://www.motortrend.com/uploads/2024/01/2024-Mercedes-Benz-CLE-Coupe-19.jpg",
    product_price: "$9919",
    product_stack: 10,
  },
];
const PopularProducts = () => {
  return (
    <div className="md:w-[18rem] w-full h-[22rem]  bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3 ">
        {popularProductData.map((product) => (
          <Link
            key={product.id}
            className="flex hover:no-underline"
            to={`/product/${product.id}`}
          >
            <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={product.product_thumbnell}
                alt={product.product_name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p
                className={`text-sm text-gray-800 ${
                  product.product_stack === 0
                    ? "text-orange-500"
                    : "text-green-500"
                }`}
              >
                {product.product_name}
              </p>
              <span className="text-sm font-md">
                {product.product_stack === 0
                  ? "Out of stock"
                  : `${product.product_stack} in stock`}
              </span>
            </div>
            <div className="text-sm text-gray-400 pl-2">
              {product.product_price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
