import { createStore } from 'easy-peasy';
import { userStore } from './entities/user';
import { persist } from 'easy-peasy';

export const store = createStore(persist({
  userStore,
}, {
  // TODO: this would be replaced with a secure cookie or we would just store the token in memory or we could even get rid of the token and just use the address ?
  storage: localStorage
}));