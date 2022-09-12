# JavaScript Advanced Concepts (Class 8)

## Exercise #1: Intermediate

**Aim**: Create a function that takes a "base number" as an argument. This function should return another function that takes a new argument and returns the sum of the "base number" and the new argument.

Please check the examples below for a more precise representation of the behavior expected.

_Examples_

```js
// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

const plusFive = makePlusFunction(5)

plusFive(2)    ➞    7

plusFive(-8)    ➞    -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

const plusTen = makePlusFunction(10)

plusTen(0)    ➞    10

plusTen(188)    ➞    198

plusFive(plusTen(0))    ➞    15
```

_Notes_

- All inputs will be valid numbers.

---

---

## Exercise #2: Intermediate

**Aim**: Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII code is odd.

_Examples_

```js
asciiCapitalize("to be or not to be!")    ➞    "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID")    ➞    "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning.")    ➞    "oH wHaT a BeauTiFuL moRNiNg."
```

---

---

## Exercise #3: Advanced

**Aim**: Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.

The criteria for a candidate to be qualified in the coding interview is:

- The candidate should have completed all the questions.
- The maximum time given to complete the interview is 120 minutes.
- The maximum time given for very easy questions is 5 minutes each.
- The maximum time given for easy questions is 10 minutes each.
- The maximum time given for medium questions is 15 minutes each.
- The maximum time given for hard questions is 20 minutes each.

If all the above conditions are satisfied, return "qualified", else return "disqualified".

You will be given an array of time taken by a candidate to solve a particular question and the total time the candidate takes to complete the interview.

Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].

The maximum time to complete the interview includes a buffer time of 20 minutes.

_Examples_

```js
interview([5, 5, 10, 10, 15, 15, 20, 20], 120)    ➞    "qualified"

interview([2, 3, 8, 6, 5, 12, 10, 18], 64)    ➞     "qualified"

interview([5, 5, 10, 10, 25, 15, 20, 20], 120)    ➞    "disqualified"
// Exceeded the time limit for a medium question.

interview([5, 5, 10, 10, 15, 15, 20], 120)    ➞    "disqualified"
// Did not complete all the questions.

interview([5, 5, 10, 10, 15, 15, 20, 20], 130)    ➞    "disqualified"
// Solved all the questions in their respected time limits but exceeded the total time limit of the interview.
```

_Notes_

- Try to solve the problem using only array methods.
