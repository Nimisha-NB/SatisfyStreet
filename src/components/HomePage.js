import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1 className="head">Welcome!</h1>
      <div style={{ backgroundColor: "black", display: "flex", padding: 30 }}>
        <img style={{ height: 550 }} src="./images/HomeImg.avif" alt="Pic" />
        <div>
          <Link to="/menu">
            <button
              className="menu-item"
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
          <div
            className="menu-item"
            style={{
              //backgroundColor: "white",
              height: 350,
              width: 350,
              margin: 10,
            }}
          >
            <img
              style={{
                height: 200,
                marginBottom: 100,
                paddingTop: 10,
                width: 380,
              }}
              src="./images/pasta.png"
              alt="alto"
            />
            <Link to="/menu">
              <button
                style={{
                  height: 50,
                  width: 100,
                  marginTop: -250,
                }}
              >
                Order Now
              </button>
            </Link>
          </div>
          <div
            className="menu-item"
            style={{
              //backgroundColor: "white",
              height: 350,
              width: 350,
              margin: 10,
            }}
          >
            <img
              style={{
                height: 200,
                marginBottom: 100,
                paddingTop: 10,
                width: 380,
              }}
              src="./images/pizza1.png"
              alt="alto"
            />
            <Link to="/menu">
              <button
                style={{
                  height: 50,
                  width: 100,
                  marginTop: -250,
                }}
              >
                Order Now
              </button>
            </Link>
          </div>
          <div
            className="menu-item"
            style={{
              //backgroundColor: "white",
              height: 350,
              width: 350,
              margin: 10,
            }}
          >
            <img
              style={{
                height: 200,
                marginBottom: 100,
                paddingTop: 10,
                width: 380,
              }}
              src="./images/chicken1.png"
              alt="alto"
            />
            <Link to="/menu">
              <button
                style={{
                  height: 50,
                  width: 100,
                  marginTop: -250,
                }}
              >
                Order Now
              </button>
            </Link>
          </div>
          {/* <div
            className="menu-item"
            style={{
              //backgroundColor: "white",
              height: 350,
              width: 3000,
              margin: 10,
            }}
          >
            <img
              style={{
                height: 200,
                marginBottom: 100,
                paddingTop: 10,
                width: 380,
              }}
              src="./images/pasta.png"
              alt="alto"
            />
            <button
              style={{
                height: 50,
                width: 100,
                marginTop: -250,
              }}
            >
              Order Now
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
