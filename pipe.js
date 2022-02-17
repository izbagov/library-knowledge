function pipe(funcs) {
  return (x) => funcs.reduce((value, fn) => fn(value), x);
}
