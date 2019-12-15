/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import FriendSidebar from 'containers/HomePage/sidebar/friends';
import SettingSidebar from 'containers/HomePage/sidebar/setting';
import NotificationSidebar from 'containers/HomePage/sidebar/notifications';
import RecentChatSidebar from 'containers/HomePage/sidebar/recentChat';
import { getNavigationType } from 'containers/HomePage/selector';
import {
  SETTING_NAVIGATION_TYPE,
  FRIEND_NAVIGATION_TYPE,
  CHAT_NAVIGATION_TYPE,
  NOTIFICATION_NAVIGATION_TYPE,
} from 'containers/HomePage/navigation/constants';

const renderSidebarContent = type => {
  switch(type) {
    case SETTING_NAVIGATION_TYPE:
      return <SettingSidebar />;
    case FRIEND_NAVIGATION_TYPE:
      return <FriendSidebar />;
    case CHAT_NAVIGATION_TYPE:
      return <RecentChatSidebar />;
    case NOTIFICATION_NAVIGATION_TYPE:
      return <NotificationSidebar />;
    default:
      break;
  }
};

function Sidebar({ navigationType }) {
  return (
    <React.Fragment>
      {
        renderSidebarContent(navigationType)
      }
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  navigationType: getNavigationType(),
});

Sidebar.propTypes = {
  navigationType: PropTypes.string.isRequired,
}
export default connect(mapStateToProps, null)(Sidebar);
