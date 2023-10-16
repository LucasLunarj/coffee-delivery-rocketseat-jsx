
import { FormProvider, useForm } from "react-hook-form";
import { AdditionalInformation } from "./Containers/AdditionalInformation";
import { SelectedProducts } from "./Containers/SelectedProducts";
import { CheckoutContainer } from "./styles";
import { useContext } from "react";
import { CoffeeListContext } from "../../contexts/CoffeListContext";

export function Checkout() {
  const context = useContext(CoffeeListContext)
  const methods = useForm()
  function handleGetFormData(data) {
    console.log(data)
    context.dispatch({ type: 'GATHERING_DATA_INFORMATION', payload: data })

  }
  return (

    <CheckoutContainer>
      <form action="" onSubmit={methods.handleSubmit(handleGetFormData)} >
        <FormProvider {...methods}>
          <AdditionalInformation />

          <SelectedProducts />
        </FormProvider>

      </form>

    </CheckoutContainer >

  );
}
