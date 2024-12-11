const ProductCard = ({ product }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-700 mt-1">${product.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;
  