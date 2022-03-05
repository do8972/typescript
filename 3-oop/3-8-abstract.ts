{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    // abstract클래스는 object를 만들 수 없음.(추상적인 클래스)
    // 달라져야하는 부분만 abstract 메소드로 정의를 할 수 있음.
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      // 상속을 하려면 public으로 변경.
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine... 🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CoffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      // 자식 클래스에서 또 다른 데이터를 생성자에서 받아올 수 있음.
      // 이때, 부모의 생성자를 호출해야 함.
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),

    new CoffeeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach(machien => {
    console.log("---------------------");
    machien.makeCoffee(1);
  });

  // Encapsulation(캡슐화), Abstraction(추상화), Inheritance(상속), Polymorphsism(다형성).
}
