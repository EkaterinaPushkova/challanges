// Convert a string literal to a number, which behaves like Number.parseInt.

type StringToNumber<RowMix extends string> =
  RowMix extends `${infer NumberRow extends number}` ? NumberRow : never;

type MyNumber = StringToNumber<"123">;

const myNumber: MyNumber = 123;
