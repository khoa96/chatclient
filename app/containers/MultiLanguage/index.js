import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { setLanguage } from 'utils/sessionStorage';
import Button from 'components/commons/Button';
import FacebookIcon from 'images/icons/facebook.svg';
import GoogleIcon from 'images/icons/google.svg';
import GithubhIcon from 'images/icons/github.svg';

function MultiLanguage({ t }) {
  const handleChangLanguage = language => {
    setLanguage(language);
  };

  return (
    <React.Fragment>
      <h1>{t('home.hello')}</h1>
      <Button context="primary" onClick={() => handleChangLanguage('en')}>
        English
      </Button>
      <Button context="primary" onClick={() => handleChangLanguage('vi')}>
        Vietnamese
      </Button>
      <div className="alert alert-primary" role="alert">
        {t('home.alertPrimary')}
      </div>
      <div className="alert alert-secondary" role="alert">
        {t('home.alertDefault')}
      </div>
      <div className="alert alert-success" role="alert">
        {t('home.alertSuccess')}
      </div>
      <div className="alert alert-danger" role="alert">
        {t('home.alertDanger')}
      </div>
      <div className="alert alert-warning" role="alert">
        {t('home.alertWarning')}
      </div>
      <h3>
        <span>
          <i className="ion-md-close-circle" />
        </span>
      </h3>
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </div>
      <button type="button" className="btn btn-outline-primary">
        Primary
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-outline-success">
        Success
      </button>
      <button type="button" className="btn btn-outline-danger">
        Danger
      </button>
      <button type="button" className="btn btn-outline-warning">
        Warning
      </button>
      <button type="button" className="btn btn-outline-info">
        Info
      </button>
      <button type="button" className="btn btn-outline-light">
        Light
      </button>
      <button type="button" className="btn btn-outline-dark">
        Dark
      </button>

      <hr />
      <Button context="primary" onClick={() => {}}>
        Button component
      </Button>
      <Button context="circle" type="facebook" onClick={() => {}}>
        <img src={FacebookIcon} alt="facebook" />
      </Button>
      <Button context="circle" type="google" onClick={() => {}}>
        <img src={GoogleIcon} alt="facebook" />
      </Button>
      <Button context="circle" type="twiter" onClick={() => {}}>
        <img src={GithubhIcon} alt="facebook" />
      </Button>

      <Button context="link" onClick={() => {}}>
        button link
      </Button>
    </React.Fragment>
  );
}

MultiLanguage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(MultiLanguage);
