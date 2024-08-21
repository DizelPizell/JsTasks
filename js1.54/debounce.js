function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
      const context = this;
      
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }
  
  let counter = 0;
  
  const fn = () => {
    counter++;
  };
  
  const debouncedFn = debounce(fn, 200);
  
  debouncedFn();
  
  setTimeout(debouncedFn, 100);
  setTimeout(debouncedFn, 200);
  setTimeout(debouncedFn, 300);
  setTimeout(debouncedFn, 400);
  
  setTimeout(() => {
    console.log(counter);
  }, 700);