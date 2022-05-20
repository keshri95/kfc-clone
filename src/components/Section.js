import React from "react";
import styled from "styled-components";
export const Section = () => {
  return (
    <Center>
      <OrderSec>
        <p>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p>
        <button>Start Order</button>
      </OrderSec>
      <Bannner></Bannner>
      <Headers>
        <h1>welcome to kfc!</h1>
      </Headers>
      <BrowseHeading>
        <h1>browse categories</h1>
        <ItemsImages>
          <div
            style={{
              width: "100%",
              borderRadius: "5px",
              backgroundColor: "#f8f7f5",
            }}
          >
            <img
              src="./images/match.jpg"
              alt="match day special"
              style={{
                width: "100%",
              }}
            />
            <p>match day special</p>
          </div>
          <div
            style={{
              width: "100%",
              borderRadius: "5px",
              backgroundColor: "#f8f7f5",
            }}
          >
            <img
              src="./images/chicken.jpg"
              alt="chicken bucket"
              style={{
                width: "100%",
              }}
            />
            <p>chicken bucket</p>
          </div>

          <div
            style={{
              width: "100%",
              borderRadius: "5px",
              backgroundColor: "#f8f7f5",
            }}
          >
            <img
              src="./images/biryani.jpg"
              alt="biryani bucket"
              style={{
                width: "100%",
              }}
            />
            <p>biryani bucket</p>
          </div>
          <div
            style={{
              width: "100%",
              borderRadius: "5px",
              backgroundColor: "#f8f7f5",
            }}
          >
            <img
              src="./images/box-meal.jpg"
              alt="box meal"
              style={{
                width: "100%",
              }}
            />
            <p>box meal</p>
          </div>
          <div
            style={{
              width: "100%",
              borderRadius: "5px",
              backgroundColor: "#f8f7f5",
            }}
          >
            <img
              src="./images/burger.jpg"
              alt="burgers"
              style={{ width: "100%" }}
            />
            <p>burgers</p>
          </div>
          <div
            style={{
              width: "100%",
              borderRadius: "5px",
              backgroundColor: "#f8f7f5",
            }}
          >
            <img
              src="./images/home.jpg"
              alt="stay home specials"
              style={{ width: "100%" }}
            />
            <p>stay home specials</p>
          </div>
          <div
            style={{
              width: "100%",
              borderRadius: "5px",
              backgroundColor: "#f8f7f5",
            }}
          >
            <img
              src="./images/snaks.jpg"
              alt="snacks"
              style={{ width: "100%" }}
            />
            <p>snacks</p>
          </div>
          <div
            style={{
              width: "100%",
              borderRadius: "5px",
              backgroundColor: "#f8f7f5",
            }}
          >
            <img
              src="./images/finger_lickin.fc21c805.svg"
              alt="view all menu"
              style={{ width: "100%" }}
            />
            <p>view all menu</p>
          </div>
        </ItemsImages>
      </BrowseHeading>
    </Center>
  );
};

const Center = styled.div`
  // width: 100%;
  // height: 40vh;
`;

const OrderSec = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  gap: 10px;
  text-transform: uppercase;
  background-color: black;
  color: #fff;
`;

const Bannner = styled.div`
  background-image: url("./images/banner-1.webp");
  width: 100%;
  height: 45vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Headers = styled.div`
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  background-color: #f8f9fa;
  padding: 2% 10%;
`;

const BrowseHeading = styled.div`
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  background-color: #f8f9fa;
  width: 100%;
  padding: 2% 10%;
  `;
  
  const ItemsImages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-align: center;
  cursor: pointer;
`;
