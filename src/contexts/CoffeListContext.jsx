import { createContext, useReducer } from "react";
import { CoffeeItens } from "../data/data";
import { reducer } from "../reducers/coffeeReducer";

export const CoffeeListContext = createContext(null);


// eslint-disable-next-line react/prop-types
export const CoffeeListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, CoffeeItens
  )

  return (
    <CoffeeListContext.Provider value={{ state, dispatch }}>
      {children}
    </CoffeeListContext.Provider>
  );
};
