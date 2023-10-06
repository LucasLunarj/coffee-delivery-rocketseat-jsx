import { createContext, useReducer, useState } from "react";
import { CoffeeItem } from "../data/data";
import { reducer } from "../reducers/coffeeReducer";

export const CoffeeListContext = createContext(null);


// eslint-disable-next-line react/prop-types
export const CoffeeListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, CoffeeItem)

  return (
    <CoffeeListContext.Provider value={{ state, dispatch }}>
      {children}
    </CoffeeListContext.Provider>
  );
};
