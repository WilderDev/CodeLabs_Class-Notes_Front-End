// * ============ MEMOIZATION ============ * \\
// Memoization is an optimization technique that speeds up applications
// by storing the results of expensive function calls
// and returning the cached result when the same inputs are supplied again.

// ~~~~~~ MEMOIZED CLOSURES ~~~~~~ \\
// Write a function to return the nth element in the Fibonacci sequence: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
console.groupCollapsed("Fibonacci");
// Memoized

// ~~~~~~ MEMOIZED HOF ~~~~~~ \\
function fibonacciRecursion(n) {
  // Base Case
  if (n <= 2) return 1;

  //   Recursive Function call
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

console.groupEnd();
