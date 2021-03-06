import React from "react";
import OrganizationListItemContaniner from "../../containers/organization-list-item-container";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classNames from 'classnames/bind';

import  "./organization-list.css";

const OrganizationList = ({ organizations, isSavedOrganizationList }) => (
  <ul
    className={classNames({
      list: !isSavedOrganizationList,
      savedOrganizationList: isSavedOrganizationList,
    })}
  >
      <TransitionGroup>
        {organizations.map((item) => (
          <CSSTransition key={item.data.hid} timeout={500} classNames="item">
            <li>
              <OrganizationListItemContaniner
                organization={item}
                isSavedOrganizationList={isSavedOrganizationList}
              />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
  </ul>
);

export default OrganizationList;
