import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  CoffeeBoxContainer,
  CoffeeStyle,
  CoffeeStyleBox,
  IncrementDecrementContainer,
  Price,
  PriceContainer,
} from "./styles";


import { useContext, useState } from "react";
import { CoffeeListContext } from "../../../../contexts/CoffeListContext";

export function CoffeeBox(props) {
  const { coffeeTitle, id, img, coffeeDescription, amount, typeOfCoffee } = props
  const [actualState, setActualState] = useState(false)
  const context = useContext(CoffeeListContext);
  const { state } = context
  function handleDecrement() {

    context.dispatch({
      type: 'DECREMENT', payload: id
    })
  }
  function handleIncrement() {
    context.dispatch({ type: 'INCREMENT', payload: id })
  }


  function handleAddItenToCart(id) {
    // if (id === props.id) {
    //   setActualState(true)
    // } else {
    //   setActualState(false)
    // }
    context.dispatch({ type: 'IS_ACTIVE', payload: id })
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
            <button disabled={amount === 1}>
              <Minus onClick={() => handleDecrement()} size={14} />
            </button>
            <p>{amount}</p>
            <button disabled={amount === 9}>
              <Plus size={14} onClick={() => handleIncrement()} />
            </button>
          </IncrementDecrementContainer>

          <button disabled={props.active} onClick={() => handleAddItenToCart(props.id)} >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </PriceContainer>
    </CoffeeBoxContainer>
  );
}
