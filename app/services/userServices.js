import request from 'utils/RequestHelper';

export const handleSubmitRegisterUserAPI = payload =>
  request.post({
    url: '/register',
    data: payload,
  });
