async function promisesInSeries(promises) {
    let result;
    
    for (let promise of promises) {
      result = await promise(result);
    }
    
    return result;
  }
  
  const firstPromise = () => 
    new Promise((resolve) => setTimeout(() => resolve(300), 300));
  
  const secondPromise = (prevResult) => 
    new Promise((resolve) => setTimeout(() => resolve(prevResult + 200), 200));
  
  const thirdPromise = (prevResult) => 
    new Promise((resolve) => setTimeout(() => resolve(prevResult + 100), 100));
  
  promisesInSeries([firstPromise, secondPromise, thirdPromise])
    .then(result => console.log(result));