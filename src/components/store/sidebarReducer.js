
export const sidebarAction = (payload) => {
  return {
    type: "changeSidebar",
    payload: payload
  }
}

export const sidebarReducer = (state = true, action) => {
  switch (action.type) {
    case "changeSidebar":
      return action.payload;
    default:
      return state;
  }
}