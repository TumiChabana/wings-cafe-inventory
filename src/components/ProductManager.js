// ProductManager.js - UPDATED
import ProductForm from './ProductForm';
import ProductList from './ProductList';

// This component now receives state and functions as props from App.js
function ProductManager({ products, onAddProduct, onDeleteProduct, onUpdateQuantity }) {

  return (
    <div>
      
      <ProductList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onUpdateQuantity={onUpdateQuantity}
      />
      <ProductForm onAddProduct={onAddProduct} />
    </div>
  );
}

export default ProductManager;