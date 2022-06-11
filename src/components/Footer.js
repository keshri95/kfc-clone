import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Wrap>
      <Container>
        <Heading>
          <h1>OFFERS & DEALS</h1>
          <Deals>
            <p>View all deals</p>
          </Deals>
        </Heading>

        <Bottom>
          <ul>
            <li>
              <img src="./images/kfc.svg" alt="kfc-logo" />
            </li>
          </ul>
          <ul>
            <li>KFC Food</li>
            <li>Menu</li>
            <li>Order Lookup</li>
            <li>Gift Card</li>
          </ul>
          <ul>
            <li>Support</li>
            <li>Get Help</li>
            <li>Contact Us</li>
            <li>KFC Feedback</li>
          </ul>
          <ul>
            <li>Legal</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Caution Notice</li>
          </ul>
          <ul>
            <li>KFC India</li>
            <li>About KFC</li>
            <li>KFC Care</li>
            <li>Careers</li>
            <li>Our Golden Past</li>
          </ul>
          <ul>
            <li>Find a KFC</li>
          </ul>
          <ul>
            <li>
              <img src="./images/google_play.svg" alt="play" />
            </li>
            <li>
              <img src="./images/apple.svg" alt="apple" />
            </li>
          </ul>
        </Bottom>
        <Ground>
        <Menu>
          <p>Copyright © KFC Corporation 2022 All Rights Reserved</p>
        </Menu>

        <Icons>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
        </Icons>
        </Ground>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
`;

const Menu = styled.div`
  color: #fff;
  text-align: center;
  font-size: 15px;
  line-height: 10px;
  margin-bottom: -1rem;
`;
const Icons = styled.div`

`;


const Ground = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Container = styled.div`
  width: 100%;
  background: #212529;
  padding: 1% 5%;
`;
const Heading = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
`;
const Deals = styled.div`
  cursor: pointer;
`;
const Bottom = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
`;
