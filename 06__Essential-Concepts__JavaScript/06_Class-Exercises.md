# JavaScript Essential Concepts (Class 6)

## Exercise #1: Basic

**Aim**: Create a function that calculates the area of a triangle given the base and height as arguments. Call the function a few times with different inputs.

---

---

## Exercise #1: Intermediate

**Aim**: Write a function that returns an array containing all the numbers inclusive to that range given the start and end values. See examples below.

_Examples_

```js
reversibleInclusiveList(1, 5)    ➞    [1, 2, 3, 4, 5]

reversibleInclusiveList(2, 8)    ➞    [2, 3, 4, 5, 6, 7, 8]

reversibleInclusiveList(10, 20)    ➞   [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

reversibleInclusiveList(24, 17)    ➞   [24, 23, 22, 21, 20, 19, 18, 17]
```

_Notes_

- The resulting array's sort order is dependent on the input values.
- All inputs provided in the test scenarios are valid.
- If the start is greater than the end, return a descendingly sorted array; otherwise, ascendingly sorted.

---

---

## Exercise #3: Advanced

**Aim**: Create a function that takes three collections of arguments and returns the sum of the product of the grouped numbers.

_Examples_

```js
product([[1,2],[1,1],[2,3]])    ➞    9
// 1 * 2 + 1 * 1 + 2 * 3

product([[10,2],[5,0],[2,3]])    ➞    26
// 10 * 2 + 5 * 0 + 2 * 3

product([[1,2],[2,3],[3,4]])   ➞    20
// 1 * 2 + 2 * 3 + 3 * 4

product([[1,2],[0,3],[3,0]])    ➞    2
// 1 * 2 + 0 * 3 + 3 * 0
```
