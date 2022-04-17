Array;
[1, 2].map;

type Student = {
  passed: boolean;
};

const student: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];

// false가 하나라도 있으면 false, true만 있으면 true.
const result = student.every(student => student.passed);
console.log(result);

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Cat()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}

console.log(animals.every<Cat>(isCat));
