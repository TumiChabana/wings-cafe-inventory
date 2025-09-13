import {useState, useEffect} from 'react';

function Sales() {
  const [sales, setSales] = useState([]);

  // Fetch sales data from JSON Server
  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/sales`);
        const salesData = await response.json();
        setSales(salesData);
      } catch (error) {
        console.error('Error fetching sales:', error);
      }
    };

    fetchSales();
  }, []);

  // Calculate total revenue
  const totalRevenue = sales.reduce((sum, sale) => sum + sale.totalAmount, 0);

  return (
    <div className="sales-card">
      <h2>Sales Module</h2>
      
      <div className="sales-summary">
        <h3>Sales Summary</h3>
        <p>Total Revenue: <strong>M{totalRevenue.toFixed(2)}</strong></p>
        <p>Total Transactions: <strong>{sales.length}</strong></p>
      </div>

      
      <table className="sales-table">
        

        <thead>
          <h3>Recent Transactions</h3> 
          <br></br>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(sale => (
            <tr key={sale.id}>
              <td>{new Date(sale.date).toLocaleDateString()}</td>
              <td>{sale.productName}</td>
              <td>{sale.quantity}</td>
              <td>M{(sale.totalAmount / sale.quantity).toFixed(2)}</td>
              <td>M{sale.totalAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sales;