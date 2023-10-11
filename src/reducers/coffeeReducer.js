import { produce } from 'immer'

export const reducer = (state, action) => {


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


      return produce(state, draft => {

        draft.filteredList.push(draft.list.filter(item => item.id === action.payload))

      })
    case "REMOVE":
      return produce(state, draft => {
        draft.filteredList.splice(action.payload, 1)
      })

    case "INCREMENT_FILTERED_LIST":

      return {
        ...state, filteredList: state.filteredList.map((item) => {
          if (item[0].id === action.payload) {
            console.log(action.payload, ...item[0], 'item')
            return {
              ...item, amount: item.amount + 1
            }

          }

          return item
        })
      }

  }
}

