{
  /**
   * Javascript
   * Primitive(원시타입): number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; // X
  let age: number | undefined; // data type이 있거나 아직 결정되지 않았을 때
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return 1; // or undefined
  }

  // null
  let person: null; // X
  let person2: string | null;

  // unknown X
  let notSure: unknown = 0; // 리턴하는 type을 알지 못할 때
  notSure = "he";
  notSure = true;

  // any X
  let anything: any = 0; // 어떤 것이든 담을 수 있는 변수
  anything = "hello";

  // void
  function print(): void {
    // 아무것도 리턴하지 않으면 void(텅텅 빈)
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // void엔 undefined밖에 안 들어감. X

  // never
  function throwError(message: string): never {
    // 리턴을 하지 않는 함수.
    // message -> server (log)
    throw new Error(message);
    // while(true) {}  끝나지 않게 코드를 작성해야 함.
  }
  // 애플리케이션에서 정말 예상치 못한, 핸들링 할 수 없는 에러를 발생했을 때 호출할 수 있는 함수.
  let neverEnding: never; // X

  // object X
  let obj: object;
  function acceptSomeObject(obj: object) {} // 모든 object type을 할당할 수 있음.
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
