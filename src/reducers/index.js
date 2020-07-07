const EQUALITY = "equality";

const getOrganizationSearchConditionById = (organization, condition) => ({
  data: { hid },
}) =>
  condition === "equality"
    ? hid === organization.data.hid
    : hid !== organization.data.hid;

const getОganizationDetails = (organizations, organization) =>
  organizations.filter(
    getOrganizationSearchConditionById(organization, EQUALITY)
  );

const saveOrganization = (savedOrganizations, organization) =>
  savedOrganizations.find(
    getOrganizationSearchConditionById(organization, EQUALITY)
  )
    ? savedOrganizations
    : [organization, ...savedOrganizations];

const removeOrganizationFromSaved = (savedOrganizations, organization) =>
  savedOrganizations.filter(getOrganizationSearchConditionById(organization));

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
      };
    case "ORGANIZATIONS_FETCH_FAILURE":
      return {
        ...state,
        organizationsError: action.payload,
        isOrganizationsLoading: false,
      };
    case "ORGANIZATION_SAVED":
      return {
        ...state,
        savedOrganizations: saveOrganization(
          state.savedOrganizations,
          action.payload
        ),
      };
    case "ORGANIZATION_REMOVED_FROM_SAVED":
      return {
        ...state,
        savedOrganizations: removeOrganizationFromSaved(
          state.savedOrganizations,
          action.payload
        ),
      };
    case "ORGANIZATION_DETAILS_GETTED":
      return {
        ...state,
        searchPanelValue: {
          query: action.payload.value,
        },
        organizations: getОganizationDetails(
          state.organizations,
          action.payload
        ),
        isShowOrganizationDetails: true,
      };
    default:
      return state;
  }
};

export default reducer;
