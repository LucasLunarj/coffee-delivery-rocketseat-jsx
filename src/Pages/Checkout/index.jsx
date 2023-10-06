import { AdditionalInformation } from "./Containers/AdditionalInformation";
import { SelectedProducts } from "./Containers/SelectedProducts";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <AdditionalInformation />
      <SelectedProducts />
    </CheckoutContainer>
  );
}
