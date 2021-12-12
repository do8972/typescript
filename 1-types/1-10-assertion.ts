{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 타입이 string이라고 확실할 때 사용.
  console.log((<string>result).length); // 타입이 맞지 않으면 undefined를 리턴.

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱

  const button = document.querySelector("class")!; // 진짜 장담할 때 !사용.
}
