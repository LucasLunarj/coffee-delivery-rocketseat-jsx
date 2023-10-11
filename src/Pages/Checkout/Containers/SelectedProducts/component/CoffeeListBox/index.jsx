import { useContext } from "react";
import {
  ButtonArea,
  CoffeeItemContainer,
  CoffeePriceContainer,
  DivContainer,
  IncrementDecrementContainer,
  RemoveButton,
} from "./styles";


import { Minus, Plus, Trash } from "phosphor-react";
import { CoffeeListContext } from "../../../../../../contexts/CoffeListContext";


export function CoffeeListBox(props) {
  const { img, coffeeTitle, amount, index, id } = props
  const context = useContext(CoffeeListContext)
  function handleIncrement() {
    context.dispatch({ type: "INCREMENT_FILTERED_LIST", payload: id })

  }
  function handleRemove() {
    context.dispatch({ type: 'REMOVE', payload: index })

  }
  return (
    <CoffeeItemContainer>
      <DivContainer>
        <div>
          <img src={img} alt="" />
          <ButtonArea>
            <p>{coffeeTitle}</p>
            <div>
              <IncrementDecrementContainer>
                <Minus size={14} />
                <p>{amount}</p>
                <Plus onClick={() => handleIncrement()} size={14} />
              </IncrementDecrementContainer>
              <RemoveButton onClick={() => handleRemove()}>
                <Trash size={16} /> Remover
              </RemoveButton>
            </div>
          </ButtonArea>
        </div>
        <CoffeePriceContainer>
          <span>R$</span>
          <p>9,90</p>
        </CoffeePriceContainer>
        <div />
      </DivContainer>
    </CoffeeItemContainer>
  );
}
