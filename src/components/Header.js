import React from "react";
import styled from "styled-components";
export const Header = () => {
  return (
    <Container>
      <Menu>
        <a href="#">
          <img src="./images/kfc-logo.svg" alt="logo" />
        </a>
        <a href="#">Menu</a>
        <a href="#">Deals</a>
      </Menu>
      <Cart>
        <a href="#">
          <i className="fa-solid fa-user"></i>Sign In
        </a>
        <a href="#">
          $0 <i className="fa-solid fa-bucket"></i>
        </a>
      </Cart>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-around;
  z-index: 999;
  width: 100%;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  // justify-content: center;
  a {
    // cursor: pointer;
    font-weight: 400;
  }
`;

const Cart = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  a {
    cursor: pointer;
    font-weight: 400;
  }
`;
