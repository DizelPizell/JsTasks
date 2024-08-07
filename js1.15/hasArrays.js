    function hasArrays(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                return true;
            }
        }

        return false;
    }


    const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
    console.log(hasArrays(data1)); 

    const data2 = [];
    console.log(hasArrays(data2)); 

    const data3 = [false, true, {}, 1, 0, NaN];
    console.log(hasArrays(data3)); 

    const data4 = [[], {}, [1, 2, 3], 42];
    console.log(hasArrays(data4)); 