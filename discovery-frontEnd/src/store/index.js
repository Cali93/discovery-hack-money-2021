import { createStore } from 'easy-peasy';
import { user } from './entities/user';
import { persist } from 'easy-peasy';

export const store = createStore(persist({
  user,
}, {
  storage: localStorage
}));