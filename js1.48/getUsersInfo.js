const usersDb = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Alex", age: 35 },
    { id: 4, name: "Sarah", age: 28 },
    { id: 5, name: "Michael", age: 32 }
  ];
  
  const userApi = {
    getUsersIds(cb) {
      const ids = [2, 1, 5, 4, 3]; 
  
      setTimeout(() => {
        cb(ids);
      }, 200);
    },
  
    getUserInfo(id, cb) {
      const user = usersDb.find(user => user.id === id);
  
      setTimeout(() => {
        cb(user);
      }, Math.random() * 200);
    }
  };
  
  function getUsersInfo(cb) {
    userApi.getUsersIds((ids) => {
      const users = [];
      let completedRequests = 0;
  
      ids.forEach(id => {
        userApi.getUserInfo(id, (user) => {
          users.push(user);
          completedRequests++;
  
          if (completedRequests === ids.length) {
            cb(users);
          }
        });
      });
    });
  }
  
  getUsersInfo((users) => {
    console.log(users);
  });