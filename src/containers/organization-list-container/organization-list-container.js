import React from "react";
import { connect } from "react-redux";
import OrganizationList from "./../../components/organization-list/index";

const OrganizationListContainer = ({ organizations }) => (
  <OrganizationList organizations={organizations} />
);

const mapStateToProps = ({ organizations }) => ({
  organizations,
});

export default connect(mapStateToProps)(OrganizationListContainer);
