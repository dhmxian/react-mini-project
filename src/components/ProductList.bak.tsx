import { Link } from 'react-router-dom';

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {currentProducts.map((product) => (
    <Link
      to={`/product/${product.id}`}
      key={product.id}
      className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-2"/>
      <h2 className="font-semibold text-base line-clamp-2">{product.title}</h2>
      <p className="text-blue-600 font-bold mt-1">${product.price}</p>
    </Link>
  ))}
</div>
