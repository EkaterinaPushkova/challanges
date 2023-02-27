// Implement a type LengthOfString<S> that calculates the length of the template string (as in 298 - Length of String):

// type T0 = LengthOfString<"foo"> // 3

// The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).

type LengthOfString<
  S extends string,
  A extends unknown[] = []
> = S extends `${string}${infer Rest}`
  ? LengthOfString<Rest, [...A, unknown]>
  : A["length"];

type myLength = LengthOfString<"jabajb345353aja">;

const strLength: myLength = 15;

//Mikhail Smirnov
type LengthOfString1<
  SourceString extends string,
  ResultArray extends unknown[] = []
> = SourceString extends `${string}${infer Rest}`
  ? LengthOfString<Rest, [...ResultArray, never]>
  : ResultArray["length"];

type myLengthOfString = LengthOfString1<"jabajb345353aja">;

type A = "a" | "b" | "c";

type B = `type_${Capitalize<A>}`;

type A_infer = B extends `type_${infer C}` ? C : never;
