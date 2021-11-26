# foobar-challenge
Typescript and Jest unit test foobar challlenge

In this program you can download the files. Go to the terminal and run "npm install".

To run it and see the result to this problem:
"Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar".
For numbers that are multiples of both three and five print "FooBar"."
simply run "node src/foobar.js". 

I made it dynamic so if you want to change the range of numbers from "1 to 100" to "1 to 500", for example, go to the foobar.ts file, and make these changes:
From:
console.log(...FooBar().output);

To:
console.log(...FooBar(500).output);

Afterwards run "npx tsc" and finally "node src/foobar.js" to see the results. 

If you want to test this out simply run "npm test" in the terminal to check if the number of each element output is correct. 

That's it! 
