import { useState, useEffect } from 'react';

function Reports({products}) {
  const [profitData, setProfitData] = useState([]);

  useEffect(() => {
    // Calculate profit for each product
    const calculatedProfitData = products.map(product => {
      const revenue = (product.quantitySold || 0) * product.price;
      const costOfGoods = (product.quantitySold || 0) * product.cost;
      const profit = revenue - costOfGoods;
      
      return {
        productName: product.name,
        quantitySold: product.quantitySold || 0,
        revenue: revenue,
        cost: costOfGoods,
        profit: profit
      };
    });

    setProfitData(calculatedProfitData);
  }, [products]);

  // Calculate totals
  const totalRevenue = profitData.reduce((sum, item) => sum + item.revenue, 0);
  const totalCost = profitData.reduce((sum, item) => sum + item.cost, 0);
  const totalProfit = totalRevenue - totalCost;

  return (
    <div className="card">
      <h2>Profit & Loss Report</h2>
      
      <div className="report-summary">
        <div className="summary-card">
          <h3>Total Revenue</h3>
          <p className="revenue">M{totalRevenue.toFixed(2)}</p>
        </div>
        <div className="summary-card">
          <h3>Total Cost</h3>
          <p className="cost">M{totalCost.toFixed(2)}</p>
        </div>
        <div className="summary-card">
          <h3>Total Profit</h3>
          <p className={totalProfit >= 0 ? "profit" : "loss"}>
            M{totalProfit.toFixed(2)}
          </p>
        </div>
      </div>

      <h3>Profit by Product</h3>
      <table className="profit-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Units Sold</th>
            <th>Revenue</th>
            <th>Cost</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {profitData.map(item => (
            <tr key={item.productName}>
              <td>{item.productName}</td>
              <td>{item.quantitySold}</td>
              <td>M{item.revenue.toFixed(2)}</td>
              <td>M{item.cost.toFixed(2)}</td>
              <td className={item.profit >= 0 ? "profit" : "loss"}>
                M{item.profit.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;