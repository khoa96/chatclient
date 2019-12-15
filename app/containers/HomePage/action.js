/* eslint-disable prettier/prettier */
import { createSingleActions } from 'utils/reduxActions';
import { HANLDE_CHANGE_NAVIGATION_TYPE } from './constants';
export const handleChangeNavigationTypes = createSingleActions(
  HANLDE_CHANGE_NAVIGATION_TYPE,
);
