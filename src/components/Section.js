import React from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
export const Section = () => {
  return (
    <Center>
      <OrderSec>
        <p>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p>
        <button>Start Order</button>
      </OrderSec>
      <Bannner>
        <div
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/banner-1.webp"
                className="d-block w-100"
                alt="slide-1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/banner-2.webp"
                className="d-block w-100"
                alt="slide-2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/banner-1.webp"
                className="d-block w-100"
                alt="slide-1"
              />
            </div>
          </div>
        </div>
      </Bannner>
      <Headers>
        <h1>welcome to kfc!</h1>
      </Headers>
      <BrowseHeading>
        <h1>browse categories</h1>
        <ItemsImages>
          <SubMenu>
            <img
              src="./images/match.jpg"
              alt="match day special"
              style={{
                width: "100%",
              }}
            />
            <p>match day special</p>
          </SubMenu>
          <SubMenu>
            <img
              src="./images/chicken.jpg"
              alt="chicken bucket"
              style={{
                width: "100%",
              }}
            />
            <p>chicken bucket</p>
          </SubMenu>
          <SubMenu>
            <img
              src="./images/biryani.jpg"
              alt="biryani bucket"
              style={{
                width: "100%",
              }}
            />
            <p>biryani bucket</p>
          </SubMenu>
          <SubMenu>
            <img
              src="./images/box-meal.jpg"
              alt="box meal"
              style={{
                width: "100%",
              }}
            />
            <p>box meal</p>
          </SubMenu>
          <SubMenu>
            <img
              src="./images/burger.jpg"
              alt="burgers"
              style={{ width: "100%" }}
            />
            <p>burgers</p>
          </SubMenu>
          <SubMenu>
            <img
              src="./images/home.jpg"
              alt="stay home specials"
              style={{ width: "100%" }}
            />
            <p>stay home specials</p>
          </SubMenu>
          <SubMenu>
            <img
              src="./images/snaks.jpg"
              alt="snacks"
              style={{ width: "100%" }}
            />
            <p>snacks</p>
          </SubMenu>
          <SubMenu>
            <img
              src="./images/finger_lickin.fc21c805.svg"
              alt="view all menu"
              style={{ width: "100%" }}
            />
            <p>view all menu</p>
          </SubMenu>
        </ItemsImages>
      </BrowseHeading>
      <Footer />
    </Center>
  );
};

const Center = styled.div`
  width: 100%;
`;

const SubMenu = styled.div`
width: 100%,
border-radius: 5px,
background-color: #f8f7f5;
`;

const OrderSec = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  gap: 10px;
  text-transform: uppercase;
  background-color: #202124;
  color: #fff;
`;

const Bannner = styled.div`
  overflow: hidden;
  cursor: pointer;
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

  @media (max-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    text-align: center;
    cursor: pointer;
    width:100%;
  }
`;
