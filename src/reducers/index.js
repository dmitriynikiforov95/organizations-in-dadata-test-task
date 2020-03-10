const initalState = {
  searchPanelValue: { query: "" },
  foundOrganizations:[],
  isShowDetails: false
};


// const getОganizationDetails = (organizations, organization) => {
//   const inn = organization.organizations.inn,
//     kpp = organization.organizations.kpp;
//   const showedOrganization = organizations.foundOrganizations.filter(item => {
//     return item.organizations.inn == inn && item.organizations.kpp == kpp;
//   });
//   return showedOrganization;
// };


const getОganizationDetails = (data, organization) => {
  const inn = organization.data.inn,
    kpp = organization.data.kpp;
  const newShowedOrganization = data.foundOrganizations.filter(item => {
    return item.data.inn == inn && item.data.kpp == kpp;
  });
  return newShowedOrganization;
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
        case "ORGANIZATION_DETAILS_GETTED":
      return {
        ...state,
        foundOrganizations: getОganizationDetails(state, action.payload),
        isShowDetails: true,
      };
    default:
      return state;
  }
};

export default reducer;
