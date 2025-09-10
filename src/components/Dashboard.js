function Dashboard({ products }) {

  // 1. Calculate the total number of products
  const totalProducts = products.length;

  // 2. Calculate the total value of the inventory (price * quantity for each product)
  const totalInventoryValue = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  // 3. Count how many products are low stock (quantity < 5)
  const lowStockCount = products.filter(product => product.quantity < 5).length;

  return (
    <div>
      <h2>Dashboard Overview</h2>
      <div className="dashboard-stats">
        {/* Card 1: Total Products */}
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>
        {/* Card 2: Total Value */}
        <div className="stat-card">
          <h3>Total Inventory Value</h3>
          <p>M{totalInventoryValue.toFixed(2)}</p>
        </div>
        {/* Card 3: Low Stock Items */}
        <div className="stat-card">
          <h3>Low Stock Items</h3>
          <p>{lowStockCount}</p>
        </div>
      </div>
  

      {/* Product Cards Section */}
      <h3>Product Overview</h3>
      <div className="product-cards">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h4>{product.name}</h4>
            <p>Category: {product.category}</p>
            <p>Current Stock: <strong>{product.quantity}</strong></p>
            <p>Price: <strong>M{product.price.toFixed(2)}</strong></p>
            <p>Total Sold: <strong>{product.quantitySold || 0}</strong></p>
            <p>Revenue: <strong>M{((product.quantitySold || 0) * product.price).toFixed(2)}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;