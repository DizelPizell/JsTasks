let fileSizes = {
    testFile1: 65,
    testFile2: 48,
  };
  
  function getFileSize(filename, cb) {
    setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
  }
  
  function sumFileSizes(filename1, filename2, cb) {
    let size1, size2;
  
    getFileSize(filename1, (size) => {
      size1 = size;
      if (size2 !== undefined) {
        cb(size1 + size2);
      }
    });
  
    getFileSize(filename2, (size) => {
      size2 = size;
      if (size1 !== undefined) {
        cb(size1 + size2);
      }
    });
  }
  
  sumFileSizes('testFile1', 'testFile2', (sum) => {
    console.log(sum);
  });