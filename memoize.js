function memo(func, resolver) {
  const cache = new Map();

  return function (...args) {
    const key = resolver ? resolver(...args) : args.join('_');
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
