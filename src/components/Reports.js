import { useState, useEffect } from 'react';

function Reports({products}) {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    // Calculate profit for each product
      const calculatedReportData= products.map(product => {
      const currentStock = product.quantity || 0;
      const quantitySold = product.quantitySold || 0;
      const totalQuantity = currentStock + quantitySold; // Total units handled
      const costPerUnit = product.cost || 0;
      const pricePerUnit = product.price || 0;
      

      const totalCost = totalQuantity * costPerUnit; // Cost of all units (sold + unsold)
      const costOfGoodsSold = quantitySold * costPerUnit; // Cost of only sold units
      const revenue = quantitySold * pricePerUnit;
      const profit = revenue - costOfGoodsSold;
      const profitMargin = revenue > 0 ? ((profit / revenue) * 100) : 0;
      
      const inventoryValue = currentStock * costPerUnit;

      return {
        productName: product.name,
        currentStock: currentStock,
        quantitySold: quantitySold,
        totalQuantity: totalQuantity,
        costPerUnit: costPerUnit,
        pricePerUnit: pricePerUnit,
        totalCost: totalCost,
        costOfGoodsSold: costOfGoodsSold,
        inventoryValue: inventoryValue,
        revenue: revenue,
        profit: profit,
        profitMargin: profitMargin
      };
    });

    setReportData(calculatedReportData);
  }, [products]);

  // Calculate totals
  const totalRevenue = reportData.reduce((sum, item) => sum + item.revenue, 0);
  const totalCostOfGoodsSold = reportData.reduce((sum, item) => sum + item.costOfGoodsSold, 0);
  const totalProfit = totalRevenue - totalCostOfGoodsSold;
  const totalInventoryValue = reportData.reduce((sum, item) => sum + item.inventoryValue, 0);
  const totalInvestment = reportData.reduce((sum, item) => sum + item.totalCost, 0);

  return (
    <div className="card">
      <h2>Comprehensive Inventory & Profit Report</h2>
      
      <div className="report-summary">
        <div className="summary-card">
          <h3>Total Revenue (Sales)</h3>
          <p className="revenue">M{totalRevenue.toFixed(2)}</p>
        </div>
        <div className="summary-card">
          <h3>Cost of Goods Sold</h3>
          <p className="cost">M{totalCostOfGoodsSold.toFixed(2)}</p>
        </div>
        <div className="summary-card">
          <h3>Net Profit</h3>
          <p className={totalProfit >= 0 ? "profit" : "loss"}>
            M{totalProfit.toFixed(2)}
          </p>
        </div>
        <div className="summary-card">
          <h3>Current Inventory Value</h3>
          <p className="inventory">M{totalInventoryValue.toFixed(2)}</p>
        </div>
        <div className="summary-card">
          <h3>Total Investment</h3>
          <p className="investment">M{totalInvestment.toFixed(2)}</p>
        </div>
      </div>

      <h3>Detailed Product Analysis</h3>
      <div className="table-responsive">
        <table className="comprehensive-table">
          <thead>
            <tr>
              <th rowSpan="2">Product</th>
              <th colSpan="3">Quantity Analysis</th>
              <th colSpan="2">Unit Pricing</th>
              <th colSpan="4">Financial Analysis</th>
              <th rowSpan="2">Profit Margin %</th>
            </tr>
            <tr>
              <th>Current Stock</th>
              <th>Sold</th>
              <th>Total Handled</th>
              <th>Cost/Unit</th>
              <th>Price/Unit</th>
              <th>Total Cost</th>
              <th>Inventory Value</th>
              <th>Revenue</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map(item => (
              <tr key={item.productName}>
                <td><strong>{item.productName}</strong></td>
                <td>{item.currentStock}</td>
                <td>{item.quantitySold}</td>
                <td><strong>{item.totalQuantity}</strong></td>
                <td>M{item.costPerUnit.toFixed(2)}</td>
                <td>M{item.pricePerUnit.toFixed(2)}</td>
                <td>M{item.totalCost.toFixed(2)}</td>
                <td>M{item.inventoryValue.toFixed(2)}</td>
                <td>M{item.revenue.toFixed(2)}</td>
                <td className={item.profit >= 0 ? "profit" : "loss"}>
                  M{item.profit.toFixed(2)}
                </td>
                <td className={item.profit >= 0 ? "profit" : "loss"}>
                  {item.profitMargin.toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="report-notes">
        <h4>Report Explanations:</h4>
        <ul>
          <li><strong>Total Handled:</strong> Current Stock + Sold (all units you've dealt with)</li>
          <li><strong>Total Cost:</strong> Your total investment in this product (all units × cost per unit)</li>
          <li><strong>Inventory Value:</strong> Money tied up in current stock (current stock × cost per unit)</li>
          <li><strong>Revenue:</strong> Money earned from sales (sold units × price per unit)</li>
          <li><strong>Profit:</strong> Revenue minus cost of goods sold</li>
          <li><strong>Profit Margin:</strong> Percentage of revenue that becomes profit</li>
        </ul>
      </div>
    </div>
  );
}

export default Reports;