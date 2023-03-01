// Implement CamelCase<T> which converts snake_case string to camelCase.

// For example

// type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
// type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one

type RemoveUnderscore<Str> = Str extends `${infer A}_${infer Rest}`
  ? Uppercase<Str> extends Str
    ? RemoveUnderscore<Lowercase<Str>>
    : `${A}${Capitalize<RemoveUnderscore<Rest>>}`
  : Str;
type camelCase1 = RemoveUnderscore<"HELLO_WORLD_WITH_TYPES">;
