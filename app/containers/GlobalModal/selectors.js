import { createSelector } from 'reselect';
import { CONTEXT } from './constanst';
import { initialState } from './reducers';

export const globalModalDomailSelector = state =>
  state[CONTEXT] || initialState;

export const getIsShowModalSelector = () =>
  createSelector(
    globalModalDomailSelector,
    state => state.isShowModal,
  );
