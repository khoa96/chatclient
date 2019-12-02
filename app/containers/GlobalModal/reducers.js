/* eslint-disable no-param-reassign */
import produce from 'immer';
import { TOGGLE_MODAL } from './constanst';

export const initialState = {
  isShowModal: true,
};

const globalModalReducer = (state = initialState, action) =>
  produce(state, draff => {
    switch (action.type) {
      case TOGGLE_MODAL:
        draff.isShowModal = !state.isShowModal;
        break;
      default:
        break;
    }
  });

export default globalModalReducer;
