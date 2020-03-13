const initalState = {
  searchPanelValue: { query: "" },
  foundOrganizations: [],
  savedOrganizations: [],
  isShowDetails: false
};


// refactoring
const getОganizationDetails = (state, organization) => {
  const inn = organization.data.inn,
    kpp = organization.data.kpp;
  const newShowedOrganization = state.foundOrganizations.filter(item => {
    return item.data.inn === inn && item.data.kpp === kpp;
  });
  return newShowedOrganization;
};

const saveOrganization = (state, organization) => {
  const inn = organization.data.inn,
    kpp = organization.data.kpp;
  if (
    state.savedOrganizations.find(
      item => item.data.inn === inn && item.data.kpp === kpp
    )
  ) {
    return state.savedOrganizations;
  } else {
    const savedOrganizations = state.savedOrganizations;
    const newSavedOrganizations = [...savedOrganizations, organization];
    return newSavedOrganizations;
  }
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
        isShowDetails: true
      };
    case "ORGANIZATION_SAVED":
      return {
        ...state,
        savedOrganizations: saveOrganization(state, action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
