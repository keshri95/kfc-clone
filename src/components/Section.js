import React from "react";
import styled from "styled-components";
export const Section = () => {
  return (
    <Center>
      <OrderSec>
        <p>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p>
        <button>Start Order</button>
      </OrderSec>
      <Bannner>
    
      </Bannner>
      <Headers>
        <h1>welcome to kfc!</h1>
      </Headers>
      <BrowseHeading>
        <h1>browse categories</h1>
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
  justify-content:center;
  padding:10px 0;
  gap: 10px;
  text-transform: uppercase;
  background-color:black;
  color:#fff;
`;

const Bannner = styled.div`
  background-image: url('./images/banner-1.webp');
  width: 100%;
  height: 45vh;
  background-repeat:no-repeat;
  background-size: cover;
`;

const Headers = styled.div`
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  background-color: #f8f9fa;
  border: 1px solid red;
  // padding: 30px;
  `

const BrowseHeading = styled.div`
text-transform: uppercase;
font-family: 'Poppins', sans-serif;
font-size: 20px;
background-color: #f8f9fa;
border: 1px solid red;
`