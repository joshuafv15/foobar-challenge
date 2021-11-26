import { FooBar } from "../src/foobar";

describe("test foobar function", () => {
  const { num } = FooBar(); //desconstruting the values of the FooBar function

  //these are the counters for all variables, foo, bar, foobar and integers.
  let numberOfFooBar: number = Math.floor(num / 15); //number of Foobars (multiples of 3 and 5 are multiples of 15)
  let numberOfFoo: number = Math.floor(num / 3) - numberOfFooBar; //number of Foo (multiples of 3 minus the ones already counted on FooBar)
  let numberOfBar: number = Math.floor(num / 5) - numberOfFooBar; //number of Bar (multiples of 5 minus the ones already counter on FooBar)
  let numberOfIntegers: number =
    num - numberOfBar - numberOfFoo - numberOfFooBar; //total numbers of integers on the output

  it(`should return ${numberOfFooBar} "FooBar"`, () => {
    expect(FooBar(num).output.filter((i) => i === "FooBar").length).toBe(
      numberOfFooBar
    );
  });
  it(`should return ${numberOfFoo} "Foo"`, () => {
    expect(FooBar(num).output.filter((i) => i === "Foo").length).toBe(
      numberOfFoo
    );
  });
  it(`should return ${numberOfBar} "Bar"`, () => {
    expect(FooBar(num).output.filter((i) => i === "Bar").length).toBe(
      numberOfBar
    );
  });
  it(`should return ${numberOfIntegers} integers`, () => {
    expect(FooBar(num).output.filter((i) => typeof i === "number").length).toBe(
      numberOfIntegers
    );
  });
});
