{
  /**
   *  Intersection Type: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWord(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWord({
    name: "kimcoding",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
