import React from "react";
import styled from "styled-components";
export const Header = () => {
  return (
    <Container>
      <Menu>
          <li>
            <a href="#">
              <img src="./images/kfc-logo.svg" alt="logo" />
            </a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Deals</a>
          </li>
      </Menu>
      <Cart>
          <li>
            <a href="#">
              <i className="fa-solid fa-user"></i>Sign In
            </a>
          </li>
          <li>
            <a href="#">
              $0 <i className="fa-solid fa-bucket"></i>
            </a>
          </li>
      </Cart>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Cart = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
