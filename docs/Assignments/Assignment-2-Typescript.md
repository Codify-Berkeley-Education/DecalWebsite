---
sidebar_position: 2
---

# Assignment 2: Typescript Basics

## Assignment Overview

This assignment uses a series of problems to teach the basics of TypeScript. It will also give a very brief introduction to using an API. To get full credit for the assignment you must pass all of the autograder tests. All questions are weighted equally, although some are harder than others. You may write additional tests in a new file if you like, but if you push any changes to the test files to GitHub, you will get a zero percent on any questions with modified test files.

Start by cloning the starter code repository.

## Running the Tests

## Problem 1

Write a function that takes two numbers as input, converts them to a string, and then concatenates them. Pay attention to the type of the inputs and the outputs.

```typescript
concatNumbers(4, 5);
// returns "45"
```

## Problem 2

Using the created type Student, create a function to return an array of students given an array of student names and student ages. Return the students in the same order as the names and ages. You may assume that the array of names will be the same length as the array of ages. You can use a loop for this problem, but a one line solution is possible using the [map function](https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/).

```typescript
const names: string[] = ["Joe", "Schmo"];
const ages: number[] = [50, 60];
arrayOfStudents(names, ages);
// returns
// [
//     {
//         name: "Joe",
//         age: 50
//     },
//     {
//         name: "Schmo",
//         age: 60
//     }
// ]
```

## Problem 3

Given a professor, return the names of all the students the professor teaches in increasing order by their age. You can and should use the [.sort array method](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/) and use a custom [comparator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description) to decide what student is "greater than" or "less than" another student based on the property we want to sort by.

```typescript
// sorts the numbers in the list in increasing order
list.sort((num1: number, num2: number) => num1 - num2);
```

There is no runtime requirement for this problem. Assume all ages are unique, so there is no need to worry about ties. You should assume that only one professor teaches each class.

## Problem 4

An athlete is a type of student that has an additional "sport" property. All athletes are students, but not all students are athletes! Given an array of students, some of whom are also athletes, convert all of the students into athletes that play the given default sport. Students who were athletes to begin with should retain their original sport. Return the athletes in the same order as the initial student array.

```typescript
const input: (Student | Athlete)[] = [
  { name: "Joe", age: 100, sport: "Baseball" },
  { name: "Trump", age: 90 },
];
allAthletes(input, "Football");
// returns
// [
//   { name: "Joe", age: 100, sport: "Baseball" },
//   { name: "Trump", age: 90, sport: "Football" },
// ];
```

## Submitting
