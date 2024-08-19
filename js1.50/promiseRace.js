function promiseRace(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(resolve).catch(reject);
      });
    });
  }
  
  const firstPromise = new Promise((resolve) =>
    setTimeout(() => resolve(300), 300)
  );
  
  const secondPromise = new Promise((resolve) =>
    setTimeout(() => resolve(200), 200)
  );
  
  const thirdPromise = new Promise((resolve) =>
    setTimeout(() => resolve(100), 100)
  );
  
  promiseRace([firstPromise, secondPromise, thirdPromise])
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });