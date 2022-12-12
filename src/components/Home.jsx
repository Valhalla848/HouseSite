import React from "react";
import "../styles/Home.css";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { companiesName } from "../info/Comp";
import { sellHouse } from "../info/Sell";
import { rentHouse } from "../info/Rent";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Home">
      <div className="HomePage">
        <div className="Navbar">
          <div className="Navbar-logo">
            <BedroomBabyIcon
              className="Navbar-logo-icon"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="Navbar-router">
            <div className="Navbar-router-rent">Rent</div>
            <div className="Navbar-router-sale">Sale</div>
            <div className="Navbar-router-company">Companies</div>
            <div className="Navbar-router-map">Map</div>
          </div>
          <div className="Navbar-auth">
            <button className="Navbar-auth-reg">Sign up</button>
            <button className="Navbar-auth-log">Log in</button>
          </div>
        </div>
        <div className="AddAd">
          <button className="AddAd-btn">+To add an advert</button>
        </div>
        <div className="Filter">
          <select name="Type" className="Filter-global Filter-first">
            <option value="1">Buy</option>
            <option value="2">Rent</option>
          </select>
          <select name="Type" className="Filter-global Filter-second">
            <option disabled style={{ color: "gray" }}>
              Property type
            </option>
            <option value="1">Flat</option>
            <option value="2">House</option>
            <option value="3">Сommercial real estate</option>
            <option value="4">Plot</option>
            <option value="5">Country house</option>
            <option value="6">Garage</option>
          </select>
          <select name="Type" className="Filter-global Filter-third">
            <option disabled style={{ color: "gray" }}>
              Number of rooms
            </option>
            <option value="1">1-room</option>
            <option value="2">2-rooms</option>
            <option value="3">3-rooms</option>
            <option value="4">4-rooms</option>
            <option value="5">5-rooms</option>
            <option value="6">6-rooms and more</option>
          </select>
          <input
            type="search"
            placeholder="Search"
            className="Filter-global Filter-search"
          />
          <button className="Filter-btn">Search</button>
        </div>
        <div className="Slider">
          <Slider {...settings}>
            {companiesName.map((item) => (
              <div className="Slider-card">
                <div className="card">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="Slider-card-img"
                  />
                  <h1 className="Slider-card-title">{item.title}</h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="Sell">
          <div className="Sell-h2">
            <h2>Property For Sale:</h2>
          </div>
          <div className="Sell-list">
            {sellHouse.map((item) => (
              <div className="Sell-list-card">
                <img src={item.img} alt="picture" />
                <p className="Sell-list-card-info">
                  {item.place},{item.rooms}-rooms,
                </p>
                <p className="Sell-list-card-info">{item.s}m2</p>
                <div className="Sell-list-card-more">
                  <p className="Sell-list-card-info Sell-list-card-price">
                    {item.price}$
                  </p>
                  <button className="Sell-list-card-more-btn">Details</button>
                </div>
              </div>
            ))}
            <div className="Sell-list-more">
              <button className="Sell-list-more-btn">More</button>
            </div>
          </div>
        </div>
        <div className="Rent">
          <div className="Rent-h2">
            <h2>Property For Rent:</h2>
          </div>
          <div className="Rent-list">
            {rentHouse.map((item) => (
              <div className="Rent-list-card">
                <img src={item.img} alt="picture" />
                <p className="Rent-list-card-info">
                  {item.place},{item.rooms}-rooms,
                </p>
                <p className="Rent-list-card-info">{item.s}m2</p>
                <div className="Rent-list-card-more">
                  <p className="Rent-list-card-info Rent-list-card-price">
                    {item.price}$
                  </p>
                  <button className="Rent-list-card-more-btn">Details</button>
                </div>
              </div>
            ))}
            <div className="Rent-list-more">
              <button className="Rent-list-more-btn">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
