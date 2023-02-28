// Implement Replace<S, From, To> which replace the string From with To once in the given string S

// For example

// type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Part}${From}${infer Part1}` ? `${Part}${To}${Part1}` : S;

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
