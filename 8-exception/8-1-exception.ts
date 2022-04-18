// Java: Exception
// JavaScript: Error

// const array = new Array(1000000000000000);
// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents 🗒";
}

function closeFile(fileName: string): string {
  return "file ";
}

// const fileName = "file"; //  "not exist!💩" -> error
// const fileName = "not exist!💩";

// try {
//   console.log(readFile(fileName));
// } catch (error) {
//   console.log(`catched!!`);
// } finally {
//   closeFile(fileName);
//   console.log(`finally!!`);
// }
// console.log(`!!!`);
// closeFile(fileName);

function run() {
  const fileName = "not exist!💩";
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}

run();
