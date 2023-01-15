const findTheOldest = function(people) {
    var oldestPerson;
    var oldestAge = 0;
    people.forEach(checkAge);

    function checkAge(person) {
        var age = 0;
        if(!person.yearOfDeath) {
            person.yearOfDeath = 2023;
        }
        try {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        catch {
            age = 2023 - person.yearOfBirth;
        }
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
