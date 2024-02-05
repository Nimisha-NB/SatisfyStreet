import React from "react";
import { Link } from "react-router-dom";
import { stylize } from "../utils/stylize";
import menuItems from "../logic/data";

const HomePage = () => {
  return (
    <div>
      <h1 className="wlcm">Welcome!</h1>
      <h1 className="to">To <span>SatisfyStreet</span></h1>
      <div style={{ backgroundColor: "black", display: "flex", padding: 30 }}>
        <img style={{ height: 550 }} src="./images/HomeImg.avif" alt="Pic" />
        <div>
          <Link to="/menu">
            <button
              className="menux-item"
              style={{
                marginTop: 225,
                marginLeft: 150,
                height: 75,
                width: 200,
                fontSize: 20,
              }}
            >
              Go To Menu
            </button>{" "}
          </Link>
        </div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <h1>Today's Special</h1>
        <div
          style={{
            display: "flex",
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {
            menuItems.slice(0, 3).map((e) => <TodaySpecial key={e.name} item={e} />)
          }
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
};

export default HomePage;

const TodaySpecial = (props) => {
  const { item } = props;
  stylize(`
    .menux-item{
      background-color: orange;
      color: black;
      padding: 20px 20px 20px 0px;
      width: 350px;
    }
    button{
      height: 50px;
      width: 200px;
      background-color: #e91e63;
      border: 1px solid pink;
      color: white;
      border-radius: 12px;
    }
    .wlcm{
      position: absolute;
      top: 100px;
      left: 80px;
      font-size: 100px;
      color: white;
      -webkit-text-stroke-width: 5px;
      -webkit-text-stroke-color: black;
    }
    .to{
       position: absolute;
       top: 200px;
       left: 100px;
        color: white;
      -webkit-text-stroke-width: 5px;
      -webkit-text-stroke-color: black;
      font-size: 100px;
     
    }

    span{
      color: #e91e63;
    }
  `);
  return (
    <div className="menux-item">
      <center>
        <img
          style={{
            height: 160,
            justifySelf: 'center',
          }}
          src={item.image}
          alt="alto"
        />
        <center>
          <h1>{item.name}</h1>
        </center>
        <Link to="/menu">
          <button>
            Order Now
          </button>
        </Link>
      </center>
    </div>
  );
}