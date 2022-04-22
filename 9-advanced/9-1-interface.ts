type PositionType = {
  x: number;
  y: number;
}
interface PositionInterface {
  x: number;
  y: number;
}

// object ⭐️ 
const obj1: PositionType = {
  x: 1,
  y: 1,
}
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
}

// class ⭐️
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };


// 😀 only interfaces can be merged. // 오직 인터페이스만 정의가능.
interface PositionInterface {
  z: number;
}

// type PositionType {} 타입은 X

// 😀 Type aliases can use computed properties
type Person = {
  name: string,
  age: string,
}
type Name = Person['name'] // string

type NumberType = number;
type Direction = 'left' | 'right';