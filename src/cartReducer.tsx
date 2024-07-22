export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_Products": {
      return { ...state, products: [...state.products, ...action.payload] };
    }
    case "ADD_To_Cart": {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case "CHANGE_Quantity": {
      return {
        ...state,
        cart: state.cart
          .map((item: any) => {
            if (item.id == action.payload.id) {
              return {
                ...item,
                quantity: Math.max(0, action.payload.quantity),
              };
            } else return item;
          })
          .filter((item: any) => {
            if (item.quantity != 0) return item;
          }),
      };
    }
  }
}
