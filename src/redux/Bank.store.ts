import { createStore } from 'redux';
import { rootReducer } from './Bank.reducer';

const store = createStore(rootReducer);
export default store;
