import React from "react";

import SearchPanel from "../../search-panel";
import OrganizationsList from "../../organizations-list";

const SearchHint = () => {
  return (
    <div>
      <p>search-hint-icon</p>
      <p>
        Для добавления новой организации
        <br />
        введите ее название, ИНН или адрес.
      </p>
    </div>
  );
};

const OraganizationSearchPage = () => {
  return (
    <div>
      <SearchPanel />
      {/* <SearchHint /> */}
      <OrganizationsList />
    </div>
  );
};

export default OraganizationSearchPage;
