import request from 'utils/RequestHelper';
export default {
  handleSubmitRegisterUserAPI(payload) {
    return request.post({
      url: '/register',
      data: payload,
    });
  },
};
