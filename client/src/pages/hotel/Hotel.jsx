import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/252154941.jpg?k=3ba36b895a8ea0239da7c9bc16a47740b23afd668af6ea31cd34a43147f16557&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/252154948.jpg?k=11613c69a54487048eee1df28221848ad1371fbf82980b20210688df019f97a5&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/585334951.jpg?k=2f007241b2349f766f033abba942b2dd232dd70e818e7e1489f8bb687f0d9fc7&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/36961521.jpg?k=5858259fb171c95d09eb717710f9bd50e8a4b2b758b4d8d0e80f730810b99cf8&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/552294300.jpg?k=efe1dfd32e78bb973b3931fef7a211b6911d54965706ca5bf96abab259e6cd9e&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/252154942.jpg?k=e1d335af5185c171ac58088cc33490cdb51e2937e98e653d4733e6541b4b1e02&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/552294329.jpg?k=60ac13d99e3dc394ecedf280e48586b5fb9934b1f2135800e18cfe2c428c2210&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/214615107.jpg?k=4affb5c2dc1dec5af24c70f40036d6e8c3b16b3ce4f60274976131c9bd8fccfd&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/259509176.jpg?k=e2e496d675388b9a98dfde9d919a2bc56ab558dc12766cd945aa6ae49d9ccd8e&o=",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
