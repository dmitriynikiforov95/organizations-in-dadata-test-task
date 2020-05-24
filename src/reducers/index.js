
const savedOrganizations = localStorage.getItem("organizations")
  ? JSON.parse(localStorage.getItem("organizations"))
  : [];

const initalState = {
  searchPanelValue: { query: "" },
  isQueryResultloading: null,
  organizations: [],
  savedOrganizations: savedOrganizations,
  isShowOrganizationDetails: false,
};


const saveOrganization = (state, organization) => {

  if (state.savedOrganizations.find(({ data: { hid } }) => hid === organization.data.hid)) {
    return state;
  }

  const savedOrganizations = [organization, ...state.savedOrganizations];

  localStorage.setItem("organizations", JSON.stringify(savedOrganizations));

  return {
    ...state,
    savedOrganizations,
  };
};

const deleteOrganization = (state, organization) => {
  const savedOrganizations = state.savedOrganizations.filter(
    ({ data: { hid } }) => hid !== organization.data.hid
  );

  localStorage.setItem("organizations", JSON.stringify(savedOrganizations));

  return {
    ...state,
    savedOrganizations,
  };
};

const getОganizationDetails = (state, organization) => {
  const newShowedOrganization = state.organizations.filter(
    ({ data: { hid } }) => hid === organization.data.hid
  );
  return newShowedOrganization;
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "QUERY_CHANGED":
      return {
        ...state,
        isQueryResultloading: true,
        searchPanelValue: {
          query: action.payload,
        },
        isShowOrganizationDetails: false,
      };

    case "ORGANIZATIONS_GETTED":
      return {
        ...state,
        organizations: action.payload,
        isQueryResultloading: false,
      }
    case "ORGANIZATION_SAVED":
      return saveOrganization(state, action.payload);
    case "ORGANIZATION_DELETED":
      return deleteOrganization(state, action.payload);
      case "ORGANIZATION_DETAILS_GETTED":
        return {
          ...state,
          organizations: getОganizationDetails(state, action.payload),
          isShowOrganizationDetails: true,
        };
    default:
      return state;
  }
};

export default reducer;
