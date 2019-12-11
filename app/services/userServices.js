import request from 'utils/RequestHelper';
export default {
  handleSubmitRegisterUserAPI(payload) {
    return request.post({
      url: '/register',
      data: payload,
    });
  },

  handleSubmitLoginAPI(user) {
    return request.post({
      url: '/login',
      data: user,
    });
  },

  handleSubmitChangePasswordAPI(email) {
    return request.post({
      url: '/forgot-password',
      data: { email },
    });
  },
};
