import React from 'react';
import { withTranslation } from 'react-i18next';
import LoginPagePreview from './LoginPagePreview';

function LoginPage() {
  return (
    <React.Fragment>
      <LoginPagePreview />
    </React.Fragment>
  );
}

LoginPage.propTypes = {};

export default withTranslation()(LoginPage);
