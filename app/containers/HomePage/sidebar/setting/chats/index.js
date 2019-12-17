import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'components/commons/Button';
import InputCheckbox from 'components/commons/InputCheckbox';
import { ChatSettingWrapper } from './styles';

function ChatSetting() {
  return (
    <ChatSettingWrapper>
      <p className="description">
        When you clear your conversation history, the messages will be deleted
        from your own device.
      </p>
      <p className="description">
        The messages won't be deleted or cleared on the devices of the people
        you chatted with.
      </p>
      <p className="option">
        <InputCheckbox text="Hide will remove your chat history from the recent list." />
        <InputCheckbox text="Delete will remove your chat history from the device." />
      </p>
      <Button context="primary">Clear Chat History</Button>
    </ChatSettingWrapper>
  );
}

ChatSetting.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(ChatSetting);
