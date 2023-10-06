import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CoffeeBoxContainer,
  CoffeeStyle,
  CoffeeStyleBox,
  IncrementDecrementContainer,
  Price,
  PriceContainer,
} from "./styles";


import { useContext } from "react";
import { CoffeeListContext } from "../../../../contexts/CoffeListContext";

export function CoffeeBox(props) {

  const context = useContext(CoffeeListContext);

  function handleDecrement() {
    context.dispatch({
      type: 'DECREMENT', payload: context.state.amount - 1
    })
  }
  function handleIncrement() {
    context.dispatch({ type: 'INCREMENT', payload: context.state.amount + 1 })
  }
  return (
    <CoffeeBoxContainer>
      <img src={props?.img} alt="" />
      {/* <CoffeeStyleBox>
        {props.typeOfCoffee.map((item, index) => (
          <CoffeeStyle key={index}>
            <p>{item}</p>
          </CoffeeStyle>
        ))}
      </CoffeeStyleBox> */}
      <div>
        <h3>{props?.coffeeTitle}</h3>
        <p>{props?.coffeeDescription}</p>
      </div>
      <PriceContainer>
        <Price>
          <p>R$ 9,90</p>
        </Price>
        <div>
          <IncrementDecrementContainer>
            <Minus onClick={() => handleDecrement()} size={14} />
            <p>{props?.amount}</p>
            <Plus size={14} onClick={() => handleIncrement()} />
          </IncrementDecrementContainer>

          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </PriceContainer>
    </CoffeeBoxContainer>
  );
}
