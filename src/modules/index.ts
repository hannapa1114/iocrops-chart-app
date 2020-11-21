import { combineReducers } from 'redux';

import { changeChartReducer } from './changechart';

export const rootReducer = combineReducers({
  changeChart: changeChartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
