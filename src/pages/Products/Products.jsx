import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/Product/ProductCard/ProductCard';
import { products } from '../../data/products';
import './Products.scss';

const Products = () => {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Получаем уникальные бренды и категории
  const brands = ['all', ...new Set(products.map((product) => product.brand))];
  const categories = ['all', ...new Set(products.map((product) => product.category))];

  // Фильтруем продукты
  const filteredProducts = products.filter((product) => {
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    return brandMatch && categoryMatch;
  });

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="products-page__title font-nunito font-bold text-3xl md:text-4xl">Каталог косметики</h1>

        <div className="products-page__filters">
          <div className="filter-group">
            <label htmlFor="brand">Бренд:</label>
            <select
              id="brand"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="filter-select"
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand === 'all' ? 'Все бренды' : brand}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="category">Категория:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Все категории' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="products-page__grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
