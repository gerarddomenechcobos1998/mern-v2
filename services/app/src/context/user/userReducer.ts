
export default function userReducer(state:any, action:any) {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.payload
        };

      default:
        return state;
    }
  };