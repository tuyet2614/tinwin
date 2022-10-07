import { createSelector } from 'reselect';

const shopReducer = (state: any) => state.auth;

export const getShop = createSelector(shopReducer, state => state);