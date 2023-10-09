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
  const { coffeeTitle, id, img, coffeeDescription, amount, typeOfCoffee } = props

  const context = useContext(CoffeeListContext);

  function handleDecrement() {

    context.dispatch({
      type: 'DECREMENT', payload: id
    })
  }
  function handleIncrement() {
    context.dispatch({ type: 'INCREMENT', payload: id })
  }
  function handleAddItenToCart() {
    context.dispatch({ type: 'FILTERED-LIST', payload: id })
  }

  return (
    <CoffeeBoxContainer>
      <img src={img} alt="" />
      <CoffeeStyleBox>
        {typeOfCoffee.map((item, index) => (
          <CoffeeStyle key={index}>
            <p>{item}</p>
          </CoffeeStyle>
        ))}
      </CoffeeStyleBox>
      <div>
        <h3>{coffeeTitle}</h3>
        <p>{coffeeDescription}</p>
      </div>
      <PriceContainer>
        <Price>
          <p>R$ 9,90</p>
        </Price>
        <div>
          <IncrementDecrementContainer>
            <button disabled={amount === 0}>
              <Minus onClick={() => handleDecrement()} size={14} />
            </button>
            <p>{amount}</p>
            <Plus size={14} onClick={() => handleIncrement()} />
          </IncrementDecrementContainer>

          <button>
            <ShoppingCart onClick={() => handleAddItenToCart()} size={22} weight="fill" />
          </button>
        </div>
      </PriceContainer>
    </CoffeeBoxContainer>
  );
}
