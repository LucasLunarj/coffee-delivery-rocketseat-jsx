import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px 32px 160px;
  height: 104px;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 999px;
  div {
    display: flex;
    gap: 4px;
  }

  & button {
    color: ${(props) => props.theme["yellow-dark"]};
    width: 38px;
    height: 38px;
    border: none;
    background-color: ${(props) => props.theme["yellow-light"]};
    border-radius: 6px;
    cursor: pointer;
  }

  & button:hover {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const LocationContainer = styled.div`
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  padding: 8px;
  height: 38px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props) => props.theme["purple-dark"]};
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
