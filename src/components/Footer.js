// src/components/Footer.js
export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Wings Cafe</h4>
            <p>Inventory Management System</p>
            <p>Streamlining cafe operations since {currentYear}</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#dashboard">Dashboard</a>
              <a href="#products">Products</a>
              <a href="#sales">Sales</a>
              <a href="#reports">Reports</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p> Maseru, Lesotho</p>
            <p>+266 XXXX XXXX</p>
            <p>✉️ info@wingscafe.ls</p>
          </div>
          
          <div className="footer-section">
            <h4>Business Hours</h4>
            <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
            <p>Saturday: 8:00 AM - 9:00 PM</p>
            <p>Sunday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-left">
            <p>&copy; {currentYear} Wings Cafe - Itumeleng Priscilla Chabana. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#support">Support</a>
          </div>
        </div>
        
        <div className="footer-credits">
          <p>Powered by React | Built with love :) for Wings Cafe</p>
        </div>
      </div>
    </footer>
  );
}
