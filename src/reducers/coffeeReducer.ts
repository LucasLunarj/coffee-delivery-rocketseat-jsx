export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return [...state, { amount: state.amount + 1 }];
    case "DECREMENT":
      return { ...state, amount: state.amount - 1 };
  }
};
