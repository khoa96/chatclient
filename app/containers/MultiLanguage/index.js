/* eslint-disable default-case */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Button from 'components/commons/Button';
import Alert from 'components/commons/Alert';
import InputText from 'components/commons/InputText';
import InputSearch from 'components/commons/InputSearch';
import GlobalModal from 'containers/GlobalModal';
import FacebookIcon from 'images/icons/facebook.svg';
import GoogleIcon from 'images/icons/google.svg';
import GithubhIcon from 'images/icons/github.svg';

function MultiLanguage() {
  const [toggleModal, setToggleModal] = useState(false);
  const handleShowModal = () => {
    setToggleModal(!toggleModal);
  }
  return (
    <React.Fragment>
      <h1>STYLE GUIDE COMPONENT</h1>
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
      <hr />
      <Alert
        type="success"
        message="home.alertSuccess"
      />
      <Alert
        type="warning"
        message="home.alertWarning"
      />
      <Alert
        type="danger"
        message="home.alertDanger"
      />
      <hr />
      <InputText
        placeholder="signin.usernamePlaceholder"
        iconClassName="ion-md-person"
        isShowIcon
        isRequiredx
      />
      <InputText
        placeholder="signin.passwordPlaceholder"
        iconClassName="ion-md-lock"
        isShowIcon
        isRequired
      />

      <InputText
        placeholder="signin.passwordPlaceholder"
        iconClassName="ion-md-time"
        isShowIcon
        isRequired
      />
      <InputSearch />

      <hr />
      {/* demo global modal */}
      <Button context="primary" onClick={handleShowModal}>
        <span>Show Modal</span>
      </Button>
      { toggleModal && (
        <GlobalModal width="600px" height="500px">
         nguyen dang khoa hoc vien cong nghe buu chinh vien thong
        </GlobalModal>
      )}
    </React.Fragment>
  );
}

export default withTranslation()(MultiLanguage);
