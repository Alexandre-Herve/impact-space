import { createStore, combineReducers, compose } from 'redux';

export default function create(stores, initialState) {
  const store = compose(stores);
  const dispatcher = combineReducers(store, () => [middleware()]);
  return createStore(dispatcher, initialState);
}

// promise middleware
function middleware() {
  return (next) => (action) => {
    if (!action) return;
    const { promise, ...rest } = action;
    if (!promise) { return next({ ...rest }); }
    return promise.then(
      res => next({...rest, count:res}),
      err => console.log(err)
    );
  };
}

