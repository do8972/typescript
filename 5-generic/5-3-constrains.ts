interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수 X.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// Employee만 확장한 타입만 가능. => <T extends Employee>
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const jun = new FullTimeEmployee();
const steve = new PartTimeEmployee();

const junAfterPay = pay(jun);
const steveAfterPay = pay(steve);

const obj = {
  name: "Jun",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

console.log(getValue(obj, "name")); // Jun
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐕

// T obj중 key어야하며 return type은 obj에 있는 키가 가리키고 있는 value type이어야 한다.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
