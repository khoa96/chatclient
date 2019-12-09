import { createSelector } from 'reselect';
import { CONTEXT } from './constanst';
import initialState from './reducers';

export const registerDomainSelector = state => state[CONTEXT] || initialState;

export const getIsLoadingSelector = () =>
  createSelector(
    registerDomainSelector,
    state => state.isLoading,
  );

export const getUserRegisterSelector = () =>
  createSelector(
    registerDomainSelector,
    state => state.user,
  );

export const getErrorSelector = () =>
  createSelector(
    registerDomainSelector,
    state => state.error,
  );

export const getMessageSuccess = () =>
  createSelector(
    registerDomainSelector,
    state => state.messageSuccess,
  );
