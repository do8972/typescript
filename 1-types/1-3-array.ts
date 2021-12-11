{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {} // array 수정 X 읽기만 가능.

  // Tuple => interface, type alias, class
  // 가독성이 떨어짐.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
