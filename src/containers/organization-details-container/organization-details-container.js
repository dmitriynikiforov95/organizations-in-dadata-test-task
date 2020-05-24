import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { saveOrganization } from "../../actions/";
import OrganizationDetails from "../../components/organization-details";

const OrganizationDetailsContainer = ({
    organization,
    saveOrganization,
    savedOrganizations,
}) => {

    const [isOrganizationSaved, setIsOrganizationSavedValue] = useState(false);

    useEffect(() => {
        if (savedOrganizations.find(({ data: { hid } }) => hid === organization.data.hid)) {
            setIsOrganizationSavedValue(true);
        }
    }, [savedOrganizations]);

    return (
      <OrganizationDetails
        organization={organization}
        isOrganizationSaved={isOrganizationSaved}
        saveOrganization={saveOrganization}
      />
    );
};

const mapStateToProps = ({ savedOrganizations }) => {
    return {
        savedOrganizations,
    };
};

const mapDispatchToProps = {
    saveOrganization,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganizationDetailsContainer);