import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

// Импортируем компоненты страниц
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Products from '../pages/Products/Products';
import Contact from '../pages/Contact/Contact';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

console.log('App component rendering...');

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
