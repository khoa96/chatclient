import { createSelector } from 'reselect';
import { initialState } from './reducers';
import { CONTEXT } from './constants';

const homeChatDomainSelector = state => state[CONTEXT] || initialState;
export const getUserSelector = () =>
  createSelector(
    homeChatDomainSelector,
    state => state.user,
  );

export const getNavigationType = () =>
  createSelector(
    homeChatDomainSelector,
    state => state.navigationType,
  );
