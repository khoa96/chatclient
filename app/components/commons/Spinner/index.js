import React from 'react';
import { SpinnerWrapper } from './styles';

function Spinner() {
  return (
    <SpinnerWrapper>
      <div className="sk-chase">
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
      </div>
    </SpinnerWrapper>
  );
}

export default Spinner;
