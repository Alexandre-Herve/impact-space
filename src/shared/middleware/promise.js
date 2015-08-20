// promise middleware
export default function middleware() {
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

