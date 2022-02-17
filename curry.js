function curry(fn) {
  return function carried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return function (...args2) {
      return carried.apply(this, args.concat(args2));
    };
  };
}
