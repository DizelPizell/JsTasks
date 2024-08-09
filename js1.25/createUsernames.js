function createUsernames(users) {
    const currentYear = new Date().getFullYear();
    users.forEach(user => {
        const birthYear = currentYear - user.age;
        user.username = `${user.firstName.toLowerCase()}${user.lastName[0].toLowerCase()}${birthYear}`;
    });
    return users;
}

const data = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

console.log(createUsernames(data));
