import styled from "styled-components";

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AdditionalInformationContainer = styled.div`
  margin-top: 144px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};

    font-family: "Baloo 2";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const AddressInformationContainer = styled.div`
  padding: 40px;
  width: 640px;
  height: 372px;
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};

  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }
`;

export const FormContainer = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    gap: 12px;
  }

  input {
    padding: 12px;
    background-color: ${(props) => props.theme["base-button"]};
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    color: ${(props) => props.theme["base-text"]};

    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  input::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
  input:focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;

export const SelectPaymentMethodContainer = styled.div`
  width: 640px;
  height: 207px;

  display: flex;
  justify-content: center;

  padding: 40px;
  background: ${(props) => props.theme["base-card"]};

  div :has(CurrencyDollar) {
    display: flex;
  }
`;

export const PaymentOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;
  padding: 16px;
  border: 1px solid ${(props) => props.theme["base-card"]};

  button {
    width: 178.66px;
    height: 51px;

    padding: 16px;
    gap: 12px;
    border-radius: 6px;
    border: 1px solid transparent;

    display: flex;
    align-items: center;

    font-size: 12px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    text-transform: uppercase;

    background-color: ${(props) => props.theme["base-button"]};
    cursor: pointer;
  }

  button:hover {
    background-color: ${(props) => props.theme["purple-light"]};
  }

  & :focus {
    border: 1px solid ${(props) => props.theme["purple"]};
    background-color: ${(props) => props.theme["purple-light"]};
  }

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  p {
    color: ${(props) => props.theme["base-text"]};
  }
`;

const BaseTittle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;

  svg {
    color: ${(props) => props.theme["purple"]};
    margin-bottom: 18px;
  }

  h4 {
    font-size: 16px;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  p {
    font-size: 14px;
    color: ${(props) => props.theme["base-text"]};
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const AddressTitleContainer = styled(BaseTittle)`
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const PaymentMethodTitleContainer = styled(BaseTittle)`
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
