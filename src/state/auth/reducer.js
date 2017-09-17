import { cloneDeep } from 'lodash';

import { actions as actionTypes } from './constants';

const defaultState = {
  user: {
    id: null,
    scopes: [],
  },
};

const authReducer = (initialState = defaultState, action) => {
  const state = cloneDeep(initialState);
  const payload = action.payload;

  switch (action.type) {
  }

  return state;
};

export default authReducer;
