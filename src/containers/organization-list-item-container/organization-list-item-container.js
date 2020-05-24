import React, { useState } from "react";
import { connect } from "react-redux";

import { deleteOrganization, getОrganizationDetails } from "../../actions";

import OrganizationListItem from "../../components/organization-list-item";

const OrganizationListItemContaniner = ({
  organization,
  getОrganizationDetails,
  isSavedOrganizationList,
  deleteOrganization,
}) => {
  const {
    value,
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
      value: address.unrestricted_value,
    },
  ];

  const [isMoreDetailsOpen, openDetails] = useState(false);

  organizationDetails = isMoreDetailsOpen
    ? organizationDetails
    : [organizationDetails[0]];

  return (
    <OrganizationListItem
      organizationName={value}
      organizationDetails={organizationDetails}
      isSavedOrganizationList={isSavedOrganizationList}
      getОrganizationDetails={() => getОrganizationDetails(organization)}
      deleteOrganization={() => deleteOrganization(organization)}
      isMoreDetailsOpen={isMoreDetailsOpen}
      openDetails={openDetails}
    />
  );
};

const mapDispatchToProps = {
  getОrganizationDetails,
  deleteOrganization,
};

export default connect(
  null,
  mapDispatchToProps
)(OrganizationListItemContaniner);
