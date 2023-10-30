
export const searchAction = (value) => {
  return {
    type: "changeSearch",
    payload: value
  }
}


export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "changeSearch":
      return action.payload;
    default:
      return state;
  }
}