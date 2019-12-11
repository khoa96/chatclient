import { createSelector } from 'reselect';
import { initialState } from './reducers';
import { CONTEXT } from './constants';

const forgotPasswordDomainSelector = state => state[CONTEXT] || initialState;

export const getIsLoadingSelector = () =>
  createSelector(
    forgotPasswordDomainSelector,
    state => state.isLoading,
  );

export const getErrorSelector = () =>
  createSelector(
    forgotPasswordDomainSelector,
    state => state.error,
  );
