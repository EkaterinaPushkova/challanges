// Implement the type version of Array.shift

// For example

// type Result = Shift<[3, 2, 1]> // [2, 1]

type Shift<Array extends any[]> = Array extends [infer One, ...infer Rest]
  ? Rest
  : [];
type ResultShift = Shift<[3, 2, 1]>; // [2, 1]
