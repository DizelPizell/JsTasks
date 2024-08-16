function arraysToCsv(data) {
    return data.map(row => {
        return row.map(item => {
            if (typeof item === 'function') {
                throw new Error('Unexpected value');
            }
            if (typeof item === 'string') {
                if (item.includes(',') || item.includes('"') || item.includes('\n')) {
                    item = `"${item.replace(/"/g, '""')}"`;
                }
            }
            return item;
        }).join(',');
    }).join('\n');
}

try {
    console.log(arraysToCsv([[1, 2], ['a', 'b']])); 

    console.log(arraysToCsv([[1, 2], ['a,b', 'c,d']])); 

    console.log(arraysToCsv([[1, 2], ['a', 'b'], [() => {}, 'c']])); 
} 
catch (e) {
    console.error(e.message);
}