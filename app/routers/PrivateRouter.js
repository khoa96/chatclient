import React from 'react';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { Route } from 'react-router-dom';
import { getAccessToken } from 'utils/sessionStorage';
import routers from 'utils/routers';

function PrivateRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={matchProps => {
        const token = getAccessToken();
        if (!token) {
          const prevPath = matchProps.location.pathname;
          window.oldPath = prevPath;
          history.push(routers.login);
          return null;
        }
        return <Component {...matchProps} />;
      }}
    />
  );
}
PrivateRouter.propTypes = {
  component: PropTypes.any.isRequired,
};

export default PrivateRouter;
