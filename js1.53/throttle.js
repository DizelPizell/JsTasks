function throttle(fn, delay) {
    let lastCall = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn.apply(this, args);
      }
    };
  }
 
  let counter = 0;
  
  const fn = () => {
    counter++;
  };
  
  const throttledFn = throttle(fn, 500);
  
  const intervalId = setInterval(throttledFn, 100);
  
  setTimeout(() => {
    clearInterval(intervalId);
    console.log(counter);
  }, 1100);