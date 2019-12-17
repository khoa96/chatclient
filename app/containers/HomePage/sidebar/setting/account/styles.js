import styled from 'styled-components';

export const UploadAvatarWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: white;
  padding: 20px 40px;
  box-shadow: 0 0 20px rgba(157, 184, 209, 0.12);
  margin-top: 20px;

  .upload {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    text-align: center;

    img {
      display: block;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
  .upload-description {
    font-size: 13px;
    color: ${props => props.theme.grayPrimary12};
  }
`;

export const UpdateUserInfoWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  .username {
    display: flex;
    justify-content: space-between;
    .first-name,
    .last-name {
      width: 46%;
    }
  }
`;
