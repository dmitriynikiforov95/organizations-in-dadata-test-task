import reducer from "./reducers";
import {createStore} from "redux";
import throttle from 'lodash.throttle';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('organizations');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('organizations', serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

const initalState = {
  searchPanelValue: { query: "" },
  isOrganizationsLoading: null,
  organizations: [],
  organizationsError: null,
  savedOrganizations : persistedState,
  isShowOrganizationDetails: false,
};

const store = createStore(
  reducer,
  initalState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
  saveState(store.getState().savedOrganizations);
}, 1000))


export default store;