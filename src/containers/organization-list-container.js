import React from "react";
import {connect} from "react-redux";
import OrganizationList from "../components/organization-list";


const OrganizationListContainer = ({organizations}) => {
    if (organizations.length === 0) return null;
    return <OrganizationList organizations = {organizations} />
}

const mapStateToProps = ({organizations}) => {
    return {
        organizations
    }
}

export default connect(mapStateToProps)(OrganizationListContainer);