import { createSelector } from 'reselect';
import { initialState } from './reducers';
import { CONTEXT } from './constants';

const selectRouter = state => state.router;
const appDomainSelector = state => state[CONTEXT] || initialState;

export const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export const getNotificationListSelector = () =>
  createSelector(
    appDomainSelector,
    state => state.notificationList,
  );
