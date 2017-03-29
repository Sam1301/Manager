import { EMPLOYEE_UPDATE } from './types';

export const propChanged = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
