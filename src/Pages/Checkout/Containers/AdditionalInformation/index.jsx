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
import { useForm } from 'react-hook-form'

export function AdditionalInformation() {
  const { register } = useForm()
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
              {...register('cep')}
            />
            <input type="text" name="" id="" placeholder="Rua" {...register('street')} />
            <div>
              <input type="number" name="" id="" placeholder="Número" {...register('number')} />
              <input type="text" name="" id="" placeholder="Complemento" {...register('complemento')} />
            </div>
            <div>
              <input type="text" placeholder="Bairro" {...register('neighboorhood')} />
              <input type="text" placeholder="Cidade" {...register('city')} />
              <input type="text" placeholder="UF" maxLength={2} {...register('uf')} />
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
