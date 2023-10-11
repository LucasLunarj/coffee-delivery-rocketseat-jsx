import { useContext } from "react";
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

export function SelectedProducts() {
  const context = useContext(CoffeeListContext)
  const { state } = context
  return (
    <SelectedProductsContainer>
      <h2>Cafés selecionados</h2>
      <CoffeeChartListContainer>
        <CoffeeList>
          {state.filteredList?.map((item, index) => <CoffeeListBox key={item.id} index={index} {...item[0]} />)}


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
          <ConfirmButton>Confirmar Pedido</ConfirmButton>
        </CoffeeList>
      </CoffeeChartListContainer>
    </SelectedProductsContainer>
  );
}
