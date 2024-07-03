import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="content-container">
      <div className="text-container">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-sm-icon"
        />
        <p className="description">
          Fashion is part of the daily air and it doesn't quite help that it
          changes all time .Clothes have always been a marker of the era and we
          are in a revolution. Your Fashion makes you been seen and heard.
        </p>
        <div>
          <button className="button" type="button">
            Shop Now
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-icon"
      />
    </div>
  </div>
)

export default Home
