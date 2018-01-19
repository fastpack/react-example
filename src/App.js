import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Rocket from "./Rocket";

const mapStateToProps = state => {
  return {
    num: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      dispatch({ type: "INCREMENT" });
    },
    onDecrement: () => {
      dispatch({ type: "DECREMENT" });
    },
    onRandom: () => {
      dispatch({ type: "RANDOM_REQUESTED" });
    }
  };
};

const Header = styled.div`
  font-size: 2em;
  text-align: center;
  paddingtop: 25px;
  padding: 15px;
  padding-bottom: 0;
  font-weight: bold;
`;

const light = "#fdf6e3";
const dark = "#cb4b16";

const Button = styled.button`
  background: ${props => (props.primary ? dark : light)};
  color: ${props => (props.primary ? light : dark)};
  cursor: pointer;
  font-size: 1em;
  margin: 0.1em;
  padding: 0.25em;
  padding-bottom: 0;
  border: 2px solid ${dark};
  border-radius: 3px;
`;

const Center = styled.div`
  text-align: center;
  padding: 20px;
`;

const Num = styled.em`
  font-size: 1.5em;
  color: ${dark};
`;

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ num, onIncrement, onDecrement, onRandom }) => {
    return (
      <>
        <Header>
          {"Fastpack'd!"} <Rocket />
        </Header>
        <Center>
          <Num>{num}</Num>
        </Center>
        <Center>
          <Button onClick={onIncrement}>Increment</Button>
          <Button onClick={onDecrement}>Decrement</Button>
          <Button onClick={onRandom} primary>
            Random
          </Button>
        </Center>
      </>
    );
  }
);
