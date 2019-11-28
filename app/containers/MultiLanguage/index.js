import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
function MultiLanguage({ t }) {
  return <div>{t('home.hello')}</div>;
}
MultiLanguage.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation()(MultiLanguage);
