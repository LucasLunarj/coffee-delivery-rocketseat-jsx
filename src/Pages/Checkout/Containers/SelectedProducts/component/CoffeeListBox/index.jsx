import {
  ButtonArea,
  CoffeeItemContainer,
  CoffeePriceContainer,
  DivContainer,
  IncrementDecrementContainer,
  RemoveButton,
} from "./styles";


import { Minus, Plus, Trash } from "phosphor-react";

export function CoffeeListBox(props) {
  console.log(props, '22')
  return (
    <CoffeeItemContainer>
      <DivContainer>
        <div>
          <img src={props.img} alt="" />
          <ButtonArea>
            <p>{props.coffeeTitle}</p>
            <div>
              <IncrementDecrementContainer>
                <Minus size={14} />
                <p>1</p>
                <Plus size={14} />
              </IncrementDecrementContainer>
              <RemoveButton>
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
