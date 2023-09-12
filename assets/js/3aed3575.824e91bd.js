"use strict";(self.webpackChunkde_cal_website=self.webpackChunkde_cal_website||[]).push([[458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:2},i="Assignment 2 JavaScript",o={unversionedId:"Assignments/Assignment-2-JavaScript",id:"Assignments/Assignment-2-JavaScript",title:"Assignment 2 JavaScript",description:"Assignment Link",source:"@site/docs/Assignments/Assignment-2-JavaScript.md",sourceDirName:"Assignments",slug:"/Assignments/Assignment-2-JavaScript",permalink:"/DecalWebsite/docs/Assignments/Assignment-2-JavaScript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Assignments/Assignment-2-JavaScript.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Assignment 1: Git and Command Line Basics",permalink:"/DecalWebsite/docs/Assignments/Assignment-1-Git"},next:{title:"Assignment 3: Typescript Basics",permalink:"/DecalWebsite/docs/Assignments/Assignment-3-Typescript"}},l={},u=[{value:"Assignment Link",id:"assignment-link",level:2},{value:"Assignment Overview",id:"assignment-overview",level:2},{value:"Running the tests",id:"running-the-tests",level:2},{value:"Run all tests in all testing files",id:"run-all-tests-in-all-testing-files",level:3},{value:"Run all tests for a single file/problem",id:"run-all-tests-for-a-single-fileproblem",level:3},{value:"Problem 1: printIndex",id:"problem-1-printindex",level:2},{value:"Problem 2: largestMystery",id:"problem-2-largestmystery",level:2},{value:"Problem 3: multiplyBy",id:"problem-3-multiplyby",level:2},{value:"Problem 4: indexAndConcat",id:"problem-4-indexandconcat",level:2},{value:"Problem 5: Where&#39;s Waldo?",id:"problem-5-wheres-waldo",level:2},{value:"Problem 6: Are People Objects?",id:"problem-6-are-people-objects",level:2},{value:"Problem 7: We&#39;re all getting older",id:"problem-7-were-all-getting-older",level:2},{value:"Submission",id:"submission",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assignment-2-javascript"},"Assignment 2 JavaScript"),(0,r.kt)("h2",{id:"assignment-link"},"Assignment Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://classroom.github.com/a/6X0HWT0j"},"Accept the assignment")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Due Date: Wednesday September 20th")),(0,r.kt)("h2",{id:"assignment-overview"},"Assignment Overview"),(0,r.kt)("p",null,"The goal of this assignment is to get you familiar with JavaScript syntax, focussing on arrays, objects, and functions. None of the problems are designed to be overly difficult to complete conceptually. We also have several problems that can be completed using the map an filter methods, which will be extremely useful throughout the course. If you are struggling with map and filter, try solving the problem first using a for loop, and then convert your solution to using map and/or filter after."),(0,r.kt)("h2",{id:"running-the-tests"},"Running the tests"),(0,r.kt)("p",null,"All the tests that will be used for this assignment are located in the tests directory. We use a testing framework called vitest. A test for the first problem of this assignment looks like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { describe, it, expect } from "vitest";\n\n// Import the function written for the problem from the correct file\nimport printIndex from "../problems/Problem1";\n\ndescribe("printIndex Function", () => {\n  // Test Suite\n  it("Basic Case", () => {\n    // Individual Test Case\n    // Define sample inputs\n    const array = [10, 20, 30, 40, 50];\n    const index = 2;\n\n    // Get the result from the user created function\n    const result = printIndex(index, array);\n\n    // Define expected behavior\n    const expected = "Value at index 2 is 30";\n\n    // Check if expected behavior matches actual behavior\n    expect(result).toBe(expected);\n  });\n});\n')),(0,r.kt)("p",null,"Much like CS 61A or 61B, we run a series of tests on your solution code to verify it works properly. The tests that you have a local copy of are the exact same tests that we will use in the auto grader. If all of the tests pass locally, they should all pass on the auto grader and you will get full credit on the assignment. We also use the same testing framework for more or less the entire first half of the course, so take some time to play around with it and learn how it works now."),(0,r.kt)("h3",{id:"run-all-tests-in-all-testing-files"},"Run all tests in all testing files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install # Just run this once to install the vitest framework\nnpx vitest # Run in watch mode\nnpx vitest run # Run the tests a single time\n")),(0,r.kt)("p",null,"If you run a test in watch mode, the tests will rerun any time you make changes to a file. However, running all of the tests will bombard you with tons of failures for questions you have not even started working on yet."),(0,r.kt)("h3",{id:"run-all-tests-for-a-single-fileproblem"},"Run all tests for a single file/problem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'npx vitest run -t "TestName"\n')),(0,r.kt)("p",null,"You can pass the name of a specific test or test suite to run only those tests."),(0,r.kt)("p",null,"If you want to learn more about vitest cli commands check out the ",(0,r.kt)("a",{parentName:"p",href:"https://vitest.dev/guide/cli.html"},"vitest docs")),(0,r.kt)("h2",{id:"problem-1-printindex"},"Problem 1: printIndex"),(0,r.kt)("p",null,'Create a function printIndex, which takes an index and an array as parameters. The function should return a string that says "Value at index (index value) is (value of array at given index)". You may assume that the given index will not be out of bounds for the given array.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const index = 2;\nconst array = [5, 10, 15, 20];\nprintIndex(index, array); // Returns "Value at index 2 is 15"\n')),(0,r.kt)("p",null,"Create the function printIndex in the Problem1.js file. Once you have defined the function, uncomment the line at the bottom of the file exporting the function."),(0,r.kt)("h2",{id:"problem-2-largestmystery"},"Problem 2: largestMystery"),(0,r.kt)("p",null,'Given an array of numbers, arr, and an arbitrary one argument function, mysteryFunc which returns a either true or false, return the largest number in arr that causes mysteryFunc to return true. If no number causes the function to return true, return "No number passes the function!"'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"mysteryFunc can be any function that returns a boolean. You will have to call mysteryFunc on every element or arr and you can't assume anything about how mysteryFunc works.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [-5, -2, 0, 6, 10, 55, 71];\nconst divisibleByFive = (num) => num % 5 === 0; // Returns true if num is divisible by 5\nlargestMystery(arr, divisibleByFive); // Returns 55\n\nconst isNegative = (num) => num < 0; // Returns true if num is negative\nlargestMystery(arr, isNegative); // Returns -2\n")),(0,r.kt)("h2",{id:"problem-3-multiplyby"},"Problem 3: multiplyBy"),(0,r.kt)("p",null,"Given an array of numbers, return an array in which each number is multiplied by the multiplier input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [-3, 4, 10, 5];\nconst multiplier = 2;\nmultiplyBy(arr, multiplier); // Returns [-6, 8, 20, 5]\nmultiplier = 10;\nmultiplyBy(arr, multiplier); // Returns [-30, 40, 100, 50]\n")),(0,r.kt)("h2",{id:"problem-4-indexandconcat"},"Problem 4: indexAndConcat"),(0,r.kt)("p",null,"Given an array of strings, return a new array that has the index of the string concatenated with the string itself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const arr = [\n  "Hello!",\n  "My name is Elder Price",\n  "And I would like to share with you",\n  "The most amazing book.",\n];\nindexAndConcat(arr);\n/**\n * Returns\n * ["0Hello!",\n * "1My name is Elder Price",\n * "2And I would like to share with you",\n * "3The most amazing book."]\n */\n')),(0,r.kt)("h2",{id:"problem-5-wheres-waldo"},"Problem 5: Where's Waldo?"),(0,r.kt)("p",null,'Given an array of strings, return all an array of all of the strings containing the all lower case string "waldo". Be sure to ignore any instances of waldo besides the all lower case version. Additionally, we want to make sure that we can find waldo, so make all of the returned strings FULL UPPER CASE.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const arr = [\n  "Who is waldo?",\n  "where is he?",\n  "what is waldo doing?",\n  "WalDo is already here",\n];\nuppercaseStringsContainingWaldo(arr); // Returns ["WHO IS WALDO?", "WHAT IS WALDO DOING?"]\n')),(0,r.kt)("h2",{id:"problem-6-are-people-objects"},"Problem 6: Are People Objects?"),(0,r.kt)("p",null,"Given an array of names, and an array of ages, return an array of objects with the properties name and age. You may assume that the names and ages arrays are of the same length"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const names = ["Taylor", "Jake"];\nconst ages = [20, 29];\nnamesAndAges(names, ages);\n// Returns the value assigned to expectedReturn\nconst expectedReturn = [\n  {\n    name: "Taylor",\n    age: 20,\n  },\n  {\n    name: "Jake",\n    age: 29,\n  },\n];\n')),(0,r.kt)("h2",{id:"problem-7-were-all-getting-older"},"Problem 7: We're all getting older"),(0,r.kt)("p",null,"You are given an object obj in string form. Parse the object and determine if it has an age property. If it does, double it. If it doesn't add an age property and set it to zero. Return the parsed object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const expected = {};\n\n// Note the inputs are strings\nconst agelessWonder = \'{"beauty":10,"followers":1000000,"name":"Ariana"}\';\nconst oldMan = \'{"beauty":0,"backPain":true,"age":50}\';\n\ndoubleAge(agelessWonder); // Returns the value assigned to expected\nexpected = {\n  beauty: 10,\n  followers: 1_000_000,\n  name: "Ariana",\n  age: 0,\n};\n\ndoubleAge(oldMan); // Returns the value assigned to expected\nexpected = {\n  beauty: 0,\n  backPain: true,\n  age: 100,\n};\n')),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("p",null,"All you need to do to submit this assignment is to push your latest changes to your main branch. After each new push, the auto grader will run all of the tests and you can view the output to verify that they all passed."))}p.isMDXComponent=!0}}]);