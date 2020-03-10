const initalState = {
  searchPanelValue: { query: "" },
  foundOrganizations:[],
  isShowDetails: false
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "QUERY_CHANGED":
      return {
        ...state,
        searchPanelValue: {
          query: action.payload
        },
        isShowDetails: false
      };
      case "ORGANIZATIONS_GETTED":
        return {
          ...state,
          foundOrganizations: action.payload
        };
    default:
      return state;
  }
};

export default reducer;
