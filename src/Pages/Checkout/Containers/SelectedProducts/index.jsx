import { useContext, useState } from "react";
import { CoffeeListBox } from "./component/CoffeeListBox";
import {
  CoffeeChartListContainer,
  CoffeeList,
  ConfirmButton,
  DeliveryPrice,
  Divider,
  PriceAreaContainer,
  SelectedProductsContainer,
  TotalAmountItems,
  TotalPrice,
} from "./styles";
import { CoffeeListContext } from "../../../../contexts/CoffeListContext";
import { NavLink } from "react-router-dom";
export function SelectedProducts() {

  const context = useContext(CoffeeListContext)
  const { state } = context
  const convertedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  const total = state.filteredList.reduce((accumulator, current) => {
    return accumulator + current.price
  }, 0)
  console.log(total)
  return (

    <SelectedProductsContainer>
      <h2>Cafés selecionados</h2>
      <CoffeeChartListContainer>
        <CoffeeList>
          {state.filteredList?.map((item, index) => <CoffeeListBox key={item.id} index={index} {...item} />)}


          <Divider />
          <PriceAreaContainer>
            <TotalAmountItems>
              <p>Total de itens</p>
              <p>{convertedPrice.format(total)}</p>
            </TotalAmountItems>
            <DeliveryPrice>
              <p>Entrega</p>
              <p>{convertedPrice.format(3.5)}</p>
            </DeliveryPrice>
            <TotalPrice>
              <p>Total</p>
              <p>{convertedPrice.format(total + 3.5)}</p>
            </TotalPrice>
          </PriceAreaContainer>
          <NavLink to={'/success'} type="submit">
            < ConfirmButton type="submit" >Confirmar Pedido</ConfirmButton >
          </NavLink>
        </CoffeeList>
      </CoffeeChartListContainer>
    </SelectedProductsContainer >
  );
}
