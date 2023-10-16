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

    case 'OPEN_AND_CLOSE_MENU':
      return {
        ...state, menuSwitcher: action.payload
      }

    case "INCREMENT_FILTERED_LIST":
      return {
        ...state.filteredList, filteredList: state.filteredList.map((item) => {
          if (item[0].id === action.payload) {
            console.log(item)
            return {
              ...item[0], amount: item[0].amount + 3
            }
          }
          return item[0]
        })
      }
    case 'GATHERING_DATA_INFORMATION':
      return {
        ...state, deliveryInformation: action.payload
      }

    case 'PAYMENT_METHOD':
      return {
        ...state, paymentMethodSelected: action.payload
      }
  }
}

