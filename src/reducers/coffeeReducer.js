

export const reducer = (state, action) => {

  console.log(state)
  switch (action.type) {

    case "INCREMENT":
      return {
        ...state, list: state.list.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 }
          }
          return item
        })
      }
    case "DECREMENT":
      return {
        ...state, list: state.list.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 }
          }
          return item
        })
      }
    case "FILTERED-LIST":
      console.log(state.filteredList)
      return { ...state, filteredList: [...state.filteredList, state.list.filter((item) => item.id === action.payload)] }

  }
}