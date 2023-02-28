// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

// For example

// type Arr = ['1', '2', '3']

// type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

type TupleToUnion<Tuple extends readonly any[]> = Tuple[number];

type Arr = ["1", "2", "3", "string", 12];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
