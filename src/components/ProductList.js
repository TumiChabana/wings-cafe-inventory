function ProductList({ products, onDeleteProduct, onUpdateQuantity }) {

  return (
    <div className="product-list">
      <h2>Current Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price (M)</th>
            <th>Quantity</th>
            <th>QuantitySold</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>M{product.price}</td>
              <td className={product.quantity < 5 ? 'low-stock' :'stock'}>{product.quantity}</td>
              <td>{product.quantitySold || 0}</td>
              <td>
                {/* Delete Button */}
                <button className="Delete-Button" onClick={() => onDeleteProduct(product.id)}>Delete</button>

                {/* Sell Button (-1) */}
                <button className='Sell-Button'onClick={() => onUpdateQuantity(product.id, -1)}>Sell</button>
                
                {/* Restock Button (+10) */}
                <button className='Restock-Button'onClick={() => onUpdateQuantity(product.id, 10)}>Restock</button>
                
                
              </td>
              {/* Add conditional styling for low stock(Use CSS classes instead)
              <td className={product.quantity < 5 ? 'low-stock' : ''}>
              {product.quantity}
              </td> */}
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;