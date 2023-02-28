// Implement the type version of Array.reverse

// For example:

// type a = Reverse<['a', 'b']> // ['b', 'a']
// type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

type Reverse<
  SourceArray extends any[],
  OutputArray extends any[] = []
> = SourceArray extends [infer First, ...infer Rest]
  ? Reverse<Rest, [First, ...OutputArray]>
  : OutputArray;

type a = Reverse<["a", "b"]>; // ['b', 'a']
type b = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']
