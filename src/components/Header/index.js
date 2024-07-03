import './index.css'

const Header = () => (
  <>
    <div className="header-sm-container">
      <div className="logo-exit-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-icon"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="header-icon"
        />
      </div>
      <div className="icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
          alt="nav home"
          className="header-icon"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="header-icon"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="header-icon"
        />
      </div>
    </div>

    <div className="head-container">
      <nav className="nav-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo-icon"
        />
        <ul className="list-container">
          <li className="item">Home</li>
          <li className="item">Products</li>
          <li className="item">Cart</li>
          <li>
            <button className="logout button">Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  </>
)
export default Header
