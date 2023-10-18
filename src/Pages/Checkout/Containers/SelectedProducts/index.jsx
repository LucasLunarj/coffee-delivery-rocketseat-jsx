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
  const [filteredList, setFilteredList] = useState(state.filteredList)
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
              <p>R$ 29,70</p>
            </TotalAmountItems>
            <DeliveryPrice>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </DeliveryPrice>
            <TotalPrice>
              <p>Total</p>
              <p>R$ 33,20</p>
            </TotalPrice>
          </PriceAreaContainer>
          <NavLink to={'/success'}>
            < ConfirmButton type="submit" >Confirmar Pedido</ConfirmButton >
          </NavLink>
        </CoffeeList>
      </CoffeeChartListContainer>
    </SelectedProductsContainer >
  );
}
