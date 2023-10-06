import { CoffeeBox } from "./Components/CoffeeBox";
import { Background } from "./components/Background";
import { CoffeeItems, CoffeeListContainer, HomeContainer } from "./styles";

import { useContext } from "react";
import {
  CoffeeListContext,

} from "../../contexts/CoffeListContext";

export function Home() {
  const context = useContext(CoffeeListContext);
  console.log(context.state);
  return (
    <HomeContainer>
      <Background />

      <CoffeeListContainer>
        <div>
          <h1>Nossos cafés</h1>
        </div>
        <CoffeeItems>
          {context.state?.map((item) => (
            <CoffeeBox key={item.id} {...item} />
          ))}
        </CoffeeItems>
      </CoffeeListContainer>
    </HomeContainer>
  );
}
