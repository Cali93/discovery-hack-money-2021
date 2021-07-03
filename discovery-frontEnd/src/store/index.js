import { createStore } from 'easy-peasy';
import { userStore } from './entities/user';
import { persist } from 'easy-peasy';

export const store = createStore(persist({
  userStore,
}, {
  storage: localStorage
}));