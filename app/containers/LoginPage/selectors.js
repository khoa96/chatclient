import { createSelector } from 'reselect';
import { CONTEXT } from './constanst';
import { initialState } from './reducers';

const loginDomainSelector = state => state[CONTEXT] || initialState;

export const getIsLoadingSelector = () =>
  createSelector(
    loginDomainSelector,
    state => state.isLoading,
  );

export const getUserSelector = () =>
  createSelector(
    loginDomainSelector,
    state => state.user,
  );

export const getErrorSelector = () =>
  createSelector(
    loginDomainSelector,
    state => state.error,
  );
