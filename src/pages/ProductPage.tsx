import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const categories = ['all', 'electronics', "jewelery", "men's clothing", "women's clothing"];
const PRODUCTS_PER_PAGE = 4;

const ProductPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
      setFilteredProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Không tải được sản phẩm');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1); 
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded border ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-white hover:bg-gray-200'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {loading ? (
        <div>Loading the product ...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentProducts.map((product) => (
              <Link to={`/product/${product.id}`}
                key={product.id}
                className="border p-4 rounded shadow hover:shadow-lg transition">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain mb-2"
                />
                <h2 className="font-semibold text-base line-clamp-2">{product.title}</h2>
                <p className="text-blue-600 font-bold mt-1">${product.price}</p>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded hover:bg-gray-200 disabled:opacity-50">
               Previous Page
            </button>
            <span className="font-semibold">
              Page {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded hover:bg-gray-200 disabled:opacity-50">
              Next Page 
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
