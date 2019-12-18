import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { HeaderHomeChat } from './styles';

function Header({ t }) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();
  const handleClickInside = () => {
    setIsActive(!isActive);
  };
  const handleClickOuside = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOuside);
    return () => {
      document.removeEventListener('mousedown', handleClickOuside);
    };
  }, []);
  return (
    <HeaderHomeChat>
      <p className="user-info">
        <span className="username">Nguyen Dang Khoa</span>
        <span className="status-user">Is online now</span>
      </p>
      <button
        type="button"
        ref={ref}
        onClick={handleClickInside}
        className={isActive ? 'active' : ''}
      >
        test click out side
      </button>
    </HeaderHomeChat>
  );
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Header);
