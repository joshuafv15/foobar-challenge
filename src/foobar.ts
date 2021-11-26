export function FooBar(num: number = 100): {
  output: (string | number)[];
  num: number;
} {
  //by default its doing for 100 but i want it to be dynamic
  const output: (string | number)[] = []; //creating an array just to spread the console.log over one line
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //important that this condition is first so that multiples of 3 and 5 dont match other condition first.
      output.push("FooBar");
    } else if (i % 3 === 0) {
      output.push("Foo");
    } else if (i % 5 === 0) {
      output.push("Bar");
    } else {
      output.push(i);
    }
  }
  return { output, num };
}
console.log(...FooBar().output);
