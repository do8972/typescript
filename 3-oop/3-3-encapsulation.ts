{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public => 공개적으로 설정되어 있음. 작성하지 않으면 모두 public으로 설정.
  // private => 외부에서는 볼 수 없고, 접근도 불가능.
  // protected => 외부에서는 접근할 수 없지만 자식클래스에서는 접근 가능.

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      // class를 가지고 object를 만들때 항상 처음 호출되는 함수.
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -32; // invalid
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
  user.age = 6;
  console.log(user);
  console.log(user.age)
}
