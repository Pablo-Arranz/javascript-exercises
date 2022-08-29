const findTheOldest = function(people) {
    const diff = [];
    for (const person of people) {
        if (person.yearOfDeath === undefined) {
            const today = new Date();
            const yyyy = today.getFullYear();
            person.yearOfDeath = yyyy;
        }
        const count = diff.push(person.yearOfDeath - person.yearOfBirth);
    }
    const diffNumber = diff.map(Number);
    const maxAge = Math.max(...diffNumber);
    const oldest = diff.indexOf(maxAge);
    return (people[oldest]);
};

// Do not edit below this line
module.exports = findTheOldest;
