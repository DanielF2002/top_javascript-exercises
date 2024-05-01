const findTheOldest_sol2 = function(people) {
    return people.sort( (a, b) => {
        setYOD(a);
        setYOD(b);
        return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1;
    })[0];
};

const setYOD = (person) => { 
    if (person.yearOfDeath === undefined) {
        person.yearOfDeath = new Date().getFullYear();
    }
}

const findTheOldest = function(people) {
    people.forEach(setYOD)
    return people.reduce((oldest, person) => {
        return oldest.yearOfDeath - oldest.yearOfBirth > person.yearOfDeath - person.yearOfBirth ? oldest : person;
    }, {yearOfBirth: 0, yearOfDeath: 0});
};

// Do not edit below this line
module.exports = findTheOldest;
