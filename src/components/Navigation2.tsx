import { useState } from 'react'; 
import { FaHome } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 

const Navigation2 = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false); 

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen); 
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 text-white"> 
      <div className="p-4 text-2xl font-bold border-b border-gray-700"> 
        <Link to="/" className="flex items-center">
          <FaHome className="w-6 h-6 mr-2" />
          Home
        </Link>
      </div>
      <nav className="flex-1"> 
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/" className="block w-full text-center">Home</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <div onClick={toggleProducts} className=" cursor-pointer block w-full text-center">
              <li>
            <Link to="/products" className="block w-full text-center">Products</Link>
              </li>
            </div>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/contact" className="block w-full text-center">Contact</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Navigation2;