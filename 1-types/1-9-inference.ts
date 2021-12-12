{
  /**
   * Type Inference
   */
  // 타입을 따로 지정해 주지 않아도 typescript가 알아서 추론.
  let text = "hello";
  function print(message = "hello") {
    console.log(message);
  }
  print("hello");

  // return 타입을 설정하는 것을 권장. 설정하지 않아도 알아서 추론.
  function add(x: number, y: number): number {
    return x + y;
  }
  const result = add(1, 2);
}
