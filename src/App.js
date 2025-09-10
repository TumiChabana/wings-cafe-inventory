
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProductManager from './components/ProductManager';
import Sales from './components/Sales';
import Customers from './components/Customers';
import Reports from './components/Reports';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. FETCH PRODUCTS ON COMPONENT LOAD
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      console.error("Fetch error:", err);
    }
  };

  // 2. UPDATE FUNCTIONS TO USE THE API
  const handleAddProduct = async (newProduct) => {
    try {
      const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });
      const savedProduct = await response.json();
      setProducts(prevProducts => [...prevProducts, savedProduct]);
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await fetch(`http://localhost:3001/products/${productId}`, { method: 'DELETE' });
      setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const handleUpdateQuantity = async (productId, amount) => {
    const productToUpdate = products.find(p => p.id === productId);
    const newQuantity = Math.max(0, productToUpdate.quantity + amount);

    try {
      const response = await fetch(`http://localhost:3001/products/${productId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity })
      });
      const updatedProduct = await response.json();

      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === productId ? updatedProduct : product
        )
      );
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  // 3. HANDLE LOADING AND ERROR STATES IN UI
  if (isLoading) return <div className="app-container"><p>Loading...</p></div>;
  if (error) return <div className="app-container"><p>Error: {error}</p></div>;

  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <Navbar /> 
          <h1>Wings Cafe Inventory System</h1>
          {/* Define our Routes */}
          <Routes>
            <Route path="/" element={<Dashboard products={products} />} />
            <Route path="/products" element={
              <ProductManager
                products={products}
                onAddProduct={handleAddProduct}
                onDeleteProduct={handleDeleteProduct}
                onUpdateQuantity={handleUpdateQuantity}
              />
            } />
            <Route path="/sales" element={<Sales />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/reports" element={<Reports products={products} />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;