import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { UploadFileButtonWrappeer } from './styles';

function UploadFileButton({ t, onChange }) {
  const [fileName, setFileName] = useState('');
  const handleInputChange = event => {
    const { files } = event.target;
    setFileName(files[0].name);
    onChange(files[0]);
  };

  return (
    <UploadFileButtonWrappeer>
      <input
        type="file"
        id="input-file"
        className="input-file"
        onChange={handleInputChange}
        accept="image/*"
      />
      <label htmlFor="input-file" className="input-file-trigger">
        {!fileName
          ? t('homeChat.setting.account.uploadFileButtonLable')
          : fileName}
      </label>
    </UploadFileButtonWrappeer>
  );
}

UploadFileButton.propTypes = {
  t: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

export default withTranslation()(UploadFileButton);
