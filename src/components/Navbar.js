import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Wings Cafe</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/sales">Sales</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;