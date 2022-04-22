  {type Video = {
    title: string;
    author: string;
  }

  // [1, 2].map(item => item * item); // [1, 4]
  type Optional<T> = {
    [P in keyof T]?: T[P] // for ... in
  }

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  }

  type VideoOptional = Optional<Video>;
  const videoOptional = {
    title: 'hi'
  }

  type Animal = {
    name: string;
    age: number;
  }
  const animal: Optional<Animal> = {
    age: 2,
  } 
  animal.name = 'jun';
  console.log(animal)

  const video: ReadOnly<Video> = { // 변경 X
    title: 'hi',
    author: 'jun',
  }
  // video.author = 'j'

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // }

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // }

  // 주어진 T타입의 key를 돌면서 기존의 value타입을 쓰거나 null이 가능하도록 만드는 타입
  type Nullable<T> = { 
    [P in keyof T]: T[P] | null 
  }; 
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  }

}