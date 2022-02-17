function throttle(func, wait) {
  let inThrottle;

  return (...args) => {
    if (!inThrottle) {
      inThrottle = true;

      setTimeout(() => {
        func.apply(this, args);
        inThrottle = false;
      }, wait);
    }
  };
}
