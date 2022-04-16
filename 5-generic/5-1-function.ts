{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): number {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);

  // 타입을 더 보장받을 수 있기 때문에(정확한 타입) 제네릭을 사용.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
