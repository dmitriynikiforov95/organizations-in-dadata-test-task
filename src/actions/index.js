const changeQuery = query => {
  return {
    type: "ORGANIZATIONS_FETCH_REQUEST",
    payload: query
  };
};

const organizationsLoaded = organizations => {
  return {
    type: "ORGANIZATIONS_FETCH_SUCCESS",
    payload: organizations
  };
};

const organizationsError = (error) => {
  return {
    type: 'ORGANIZATIONS_FETCH_FAILURE',
    payload: error
  }
}

const fetchOrganizations = (dispatch) => (dadataApiService, query, condition) => {
  dadataApiService
    .fetchOrganizations(query)
    .then(res => {
      condition && dispatch(organizationsLoaded(res.suggestions));
    })
    .catch(error => {
      dispatch(organizationsError(error.message));
    });
};

const getОrganizationDetails = organization => {
  return {
    type: "ORGANIZATION_DETAILS_GETTED",
    payload: organization
  };
};

const saveOrganization = organization => {
  return {
    type: "ORGANIZATION_SAVED",
    payload: organization
  }
}

const removeOrganization = organization => {
  return {
    type: "ORGANIZATION_REMOVED_FROM_SAVED",
    payload: organization
  }
}

export {
  changeQuery,
  fetchOrganizations,
  getОrganizationDetails,
  saveOrganization,
  removeOrganization,
};