// Implement CamelCase<T> which converts snake_case string to camelCase.

// For example

// type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
// type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one

type CamelCase<Str> = Str extends `${infer A}_${infer Rest}`
  ? Uppercase<Str> extends Str
    ? CamelCase<Lowercase<Str>>
    : `${A}${Capitalize<CamelCase<Rest>>}`
  : Str;
type camelCase1 = CamelCase<"HELLO_WORLD_WITH_TYPES">;
