// Given an array, transform it into an object type and the key/value must be in the provided array.

// For example:

// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P; //создаст свойства с именем типа индекса элемента массива и задаст этим свойствам значения именем самого свойства
};

const tuple = ["tesla", 123, "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>;

const a: result = {
  tesla: "tesla",
  123: 123,
  "model X": "model X",
  "model Y": "model Y",
};
