// ProductManager.js - UPDATED
import ProductForm from './ProductForm';
import ProductList from './ProductList';

// This component now receives state and functions as props from App.js
function ProductManager({ products, onAddProduct, onDeleteProduct, onUpdateQuantity }) {

  return (
    <div>
      <ProductForm onAddProduct={onAddProduct} />
      <ProductList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onUpdateQuantity={onUpdateQuantity}
      />
    </div>
  );
}

export default ProductManager;