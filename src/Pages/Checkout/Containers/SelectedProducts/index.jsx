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
  const info = state.filteredList
  console.log(info, 'TEstando tudo')
  return (
    <SelectedProductsContainer>
      <h2>Cafés selecionados</h2>
      <CoffeeChartListContainer>
        <CoffeeList>
          {context.state.filteredList.map((item) => <CoffeeListBox key={item.id} {...item} />)}
          <Divider />
          <CoffeeListBox />
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
