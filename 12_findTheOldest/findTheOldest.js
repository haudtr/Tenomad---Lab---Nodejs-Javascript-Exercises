const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  const findTheOldest = function(people) {
    var nYear = new Date().getFullYear();
    var listNameAge = people.map((e)=>{
        return {
            name:e.name,
            age: e.yearOfDeath?e.yearOfDeath - e.yearOfBirth:nYear-e.yearOfBirth
        }
    })
    return listNameAge.reduce((oldest,curr) =>{
        return oldest.age < curr.age ? curr : oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
