import { action } from 'easy-peasy';

export const userStore = {
  user: {},
  login: action((state, loginResponse) => {
    state.user = loginResponse;
    return state;
  }),
  setUser: action((state, payload) => {
    state.user = payload;
    return state;
  })
};