import React from "react";
import {connect} from "react-redux";
import OrganizationList from "../components/organization-list";


const OrganizationListContainer = ({foundOrganizations}) => {
    
    return <OrganizationList organizations = {foundOrganizations} />
}

const mapStateToProps = ({foundOrganizations}) => {
    return {
        foundOrganizations
    }
}

export default connect(mapStateToProps)(OrganizationListContainer);