import styled from "styled-components";

export const CoffeeBoxContainer = styled.div`
  width: 256px;
  height: 310px;
  text-align: center;

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  background-color: ${(props) => props.theme["base-hover"]};
  border-radius: 6px 36px;

  img {
    z-index: 0;
    top: 0;
    right: 0;
    left: 0;
    bottom: 1;
    width: 120px;
    height: 120px;
    margin-bottom: 12px;
  }

  div > h3 {
    font-family: "Baloo 2";
    font-size: 20px;
    font-weight: 700;
  }

  div > p {
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  span {
    margin: auto;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 32px 24px 0 24px;

  div {
    color: ${(props) => props.theme["base-text"]};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme["white"]};
    width: 38px;
    height: 38px;
    border-radius: 6px;
    margin-left: 8px;
    cursor: pointer;
    border: none;
  }
  button:hover {
    background-color: ${(props) => props.theme["purple"]};
  }
`;

export const Price = styled.div`
  font-family: "Baloo 2";
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  color: red;
`;

export const CoffeeStyleBox = styled.div`
  display: flex;
  p {
    font-family: "Roboto";
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    padding: 4px 8px 4px 8px;
    margin: auto auto 15px auto;
    width: 81px;
    height: 21px;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CoffeeStyle = styled.p``;

export const IncrementDecrementContainer = styled.div`
  width: 72px;
  height: 32px;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px;

  p {
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
button{
  border: none;
  background-color: none;
}
  svg {
    color: ${(props) => props.theme["purple"]};
    cursor: pointer;
  }
  &:hover {
    svg {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
