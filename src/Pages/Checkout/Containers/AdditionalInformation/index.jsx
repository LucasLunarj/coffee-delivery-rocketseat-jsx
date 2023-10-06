import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  AdditionalInformationContainer,
  AddressInformationContainer,
  AddressTitleContainer,
  FormContainer,
  InformationContainer,
  PaymentMethodTitleContainer,
  PaymentOptionContainer,
  SelectPaymentMethodContainer,
} from "./styles";

export function AdditionalInformation() {
  return (
    <InformationContainer>
      <AdditionalInformationContainer>
        <h2>Complete seu pedido</h2>
        <AddressInformationContainer>
          <AddressTitleContainer>
            <MapPinLine size={22} />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressTitleContainer>
          <FormContainer>
            <input
              type="text"
              name=""
              id=""
              placeholder="CEP"
              inputMode="numeric"
            />
            <input type="text" name="" id="" placeholder="Rua" />
            <div>
              <input type="number" name="" id="" placeholder="Número" />
              <input type="text" name="" id="" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" maxLength={2} />
            </div>
          </FormContainer>
        </AddressInformationContainer>
      </AdditionalInformationContainer>
      <SelectPaymentMethodContainer>
        <div>
          <PaymentMethodTitleContainer>
            <CurrencyDollar size={22} />
            <div>
              <h4>Pagamento</h4>
              <p>
                O Pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentMethodTitleContainer>
          <PaymentOptionContainer>
            <button>
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </button>
            <button>
              <Bank size={16} />
              <p>CARTÃO DE DÉBITO</p>
            </button>
            <button>
              <Money size={16} />
              <p>Dinheiro</p>
            </button>
          </PaymentOptionContainer>
        </div>
      </SelectPaymentMethodContainer>
    </InformationContainer>
  );
}
