import React, { useState } from "react";
import { connect } from "react-redux";

import { removeOrganization, getОrganizationDetails } from "../../actions";

import OrganizationListItem from "../../components/organization-list-item";

const OrganizationListItemContaniner = ({
  organization,
  getОrganizationDetails,
  isSavedOrganizationList,
  removeOrganization,
}) => {
  const {
    data: { inn, kpp, ogrn, management, address },
  } = organization;

  let organizationDetails = [
    {
      name: "инн",
      value: inn,
    },
    {
      name: "кпп",
      value: kpp,
    },
    {
      name: "огрн",
      value: ogrn,
    },
    {
      name: "Генеральный директор",
      value: management?.name,
    },
    {
      name: "Юридический адрес",
      value: address?.unrestricted_value,
    },
  ];

  const [isMoreDetailsOpen, openDetails] = useState(false);

  return (
    <OrganizationListItem
      organization={organization}
      isSavedOrgsList={isSavedOrganizationList}
      getОrganizationDetails={() => getОrganizationDetails(organization)}
      removeOrganization={() => removeOrganization(organization)}
      isMoreDetailsOpen={isMoreDetailsOpen}
      openDetails={openDetails}
      organizationDetails={organizationDetails}
    />
  );
};

const mapDispatchToProps = {
  getОrganizationDetails,
  removeOrganization,
};

export default connect(
  null,
  mapDispatchToProps
)(OrganizationListItemContaniner);
