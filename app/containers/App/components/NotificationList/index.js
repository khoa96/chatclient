import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { CONTEXT } from 'containers/App/constants';
import reducer from 'containers/App/reducers';
import FlashMessage from 'components/commons/flashMessage';
import { getNotificationListSelector } from 'containers/App/selectors';
import { deleteNotification } from 'containers/App/actions';
import { NotificationListWrapper } from './style';

function NotificationList({ notificationList, dispatchDeleteNotification }) {
  useInjectReducer({ key: CONTEXT, reducer });

  const onDeleteNotificaation = id => {
    dispatchDeleteNotification(id);
  };

  const renderNotificationList = () => {
    if (notificationList.length) {
      return notificationList.map(item => (
        <FlashMessage
          key={item.id}
          notification={item}
          handleDelete={onDeleteNotificaation}
        />
      ));
    }
    return null;
  };
  return (
    <NotificationListWrapper>
      {renderNotificationList()}
    </NotificationListWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  notificationList: getNotificationListSelector(),
});

const mapDispatchToProps = dispatch => ({
  dispatchDeleteNotification: data => dispatch(deleteNotification(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

NotificationList.propTypes = {
  notificationList: PropTypes.array.isRequired,
  dispatchDeleteNotification: PropTypes.func,
};

export default compose(withConnect)(NotificationList);
