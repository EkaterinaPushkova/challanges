// Create a SnakeCase<T> generic that turns a string formatted in camelCase into a string formatted in snake_case.

// A few examples:

// type res1 = SnakeCase<"hello">; // => "hello"
// type res2 = SnakeCase<"userName">; // => "user_name"
// type res3 = SnakeCase<"getElementById">; // => "get_element_by_id"

type SnakeCase<Str extends string> = Str extends `${infer Item}${infer Rest}`
  ? Uppercase<Item> extends Item
    ? `_${Lowercase<Item>}${SnakeCase<Rest>}`
    : `${Item}${SnakeCase<Rest>}`
  : Str;

type res3 = SnakeCase<"getElementById">;
