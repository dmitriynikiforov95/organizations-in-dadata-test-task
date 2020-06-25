
const EQUALITY = "equality";

const searchOrganizationById = (organization, condition) => ({ data: { hid } }) =>
  (condition === "equality") ? hid === organization.data.hid : hid !== organization.data.hid;

const getОganizationDetails = (organizations, organization) =>
  organizations.filter(searchOrganizationById(organization, EQUALITY))

const saveOrganization = (savedOrganizations, organization) => {

  if (savedOrganizations.find(searchOrganizationById(organization, EQUALITY))) {
    return savedOrganizations;
  }

  return [organization, ...savedOrganizations];
};

const removeOrganization = (savedOrganizations, organization) =>
  savedOrganizations.filter(searchOrganizationById(organization))

const reducer = (state, action) => {
  switch (action.type) {
    case "ORGANIZATIONS_FETCH_REQUEST":
      return {
        ...state,
        isOrganizationsLoading: true,
        searchPanelValue: {
          query: action.payload,
        },
        isShowOrganizationDetails: false,
      };
    case "ORGANIZATIONS_FETCH_SUCCESS":
      return {
        ...state,
        organizations: action.payload,
        isOrganizationsLoading: false,
      }
    case "ORGANIZATIONS_FETCH_FAILURE":
      return {
        ...state,
        organizationsError: action.payload,
        isOrganizationsLoading: false,
      }
    case "ORGANIZATION_SAVED":
      return {
        ...state,
        savedOrganizations: saveOrganization(state.savedOrganizations, action.payload)
      }
    case "ORGANIZATION_REMOVED_FROM_SAVED":
      return {
        ...state,
        savedOrganizations: removeOrganization(state.savedOrganizations, action.payload)
      }
    case "ORGANIZATION_DETAILS_GETTED":
      return {
        ...state,
        searchPanelValue: {
          query: action.payload.value,
        },
        organizations: getОganizationDetails(state.organizations, action.payload),
        isShowOrganizationDetails: true,
      };
    default:
      return state;
  }
};

export default reducer;
