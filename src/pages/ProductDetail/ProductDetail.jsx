import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../../components/Product/ProductCard/ProductCard';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const productId = parseInt(id, 10);
    const foundProduct = products.find((p) => p.id === productId);

    if (foundProduct) {
      setProduct(foundProduct);

      // Находим похожие товары из той же категории
      const similar = products
        .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);

      setSimilarProducts(similar);
      setLoading(false);
    } else {
      setError('Товар не найден');
      setLoading(false);
    }
  }, [id]);

  const handleGoBack = () => {
    navigate('/products');
  };

  if (loading) {
    return <div className="product-detail-page container mx-auto px-4 py-8">Загрузка...</div>;
  }

  if (error) {
    return (
      <div className="product-detail-page container mx-auto px-4 py-8 text-red-500">
        Ошибка: {error}
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="product-detail-page container mx-auto px-4 py-8">
      <h1 className="text-3xl font-quicksand font-bold text-textMain mb-8 inline-block relative">
        {product.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md object-cover"
            style={{ aspectRatio: '1 / 1' }}
          />
        </div>

        <div className="product-info-container flex flex-col">
          <p className="text-xl font-nunito font-semibold text-price mb-2">{product.brand}</p>
          <p className="text-2xl font-quicksand font-bold text-textMain mb-6">{product.price} ₽</p>

          <div className="mb-6 pb-4 border-b border-neutral">
            <h2 className="text-xl font-quicksand font-semibold text-textMain mb-2">Описание</h2>
            <p className="text-gray-700 font-nunito leading-relaxed">{product.fullDescription}</p>
          </div>

          <div className="mb-6 pb-4 border-b border-neutral">
            <h2 className="text-xl font-quicksand font-semibold text-textMain mb-2">Состав</h2>
            <p className="text-gray-700 font-nunito leading-relaxed">{product.composition}</p>
          </div>

          <div className="flex space-x-4 mt-auto">
            <button
              className="px-6 py-3 bg-secondary hover:bg-secondary-dark text-textMain rounded-md transition-colors duration-300 font-quicksand"
              onClick={handleGoBack}
            >
              Вернуться в каталог
            </button>
          </div>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-quicksand font-bold text-textMain mb-6">Похожие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map((similarProduct) => (
              <ProductCard key={similarProduct.id} product={similarProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
