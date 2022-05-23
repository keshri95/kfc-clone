import React from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import "./App.css";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Wrap>
        <Header />
        <Section />
      </Wrap>
    </div>
  );
}

export default App;
const Wrap = styled.div``;
