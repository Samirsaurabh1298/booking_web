import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/643216464.jpg?k=53b95f7c1502a69fc19ea392d3784719e31b2f45b3daa94d4d0d92a467786cfe&o=&hp=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Aloft New Delhi Aerocity</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Outdoor swimming pool ◉ 1 bathroom ◉ 21m 1full king bed ◉ Spa
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
          <div className="siDetails">
              <div className="siRating">
                  <span>Excellent</span>
                  <button>8.9</button>
              </div>
              <div className="siDeatilText">
                  <span className="siPrice">$123</span>
                  <span className="siTax">Include taxes and fees</span>
                  <button className="siCheckButton">See availablity</button>
              </div>
      </div>
    </div>
  );
}

export default SearchItem