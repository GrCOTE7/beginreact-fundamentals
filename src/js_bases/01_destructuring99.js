const animals = {
  cat: {
    name: 'Catty',
    age: 12,
    children: [
      {
        name: 'Mimi',
        age: 3,
        color: 'white',
      },
      {
        name: 'Momo',
        age: 3,
        color: 'white',
      },
    ],
  },
  count: 13,
};

// Refactor this using destructuration
// const firstChildName = animals.cat.children[0].name;
// const secondChildAge = animals.cat.children[1].age;
// const count = animals.count;
// const motherName = animals.cat.name;

const { 
  cat: { 
    children: [
      { name: firstChildName }, 
      { age: secondChildAge }
    ], 
    name: motherName 
  }, 
  count 
} = animals;

console.log(`There is
${count} cats,
the mother is ${motherName}
and she has two children,
the first name is ${firstChildName}
and seconde age is ${secondChildAge}`)

console.log('-------------------');
console.log(animals);
