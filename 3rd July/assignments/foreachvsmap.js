// | Feature                    | `forEach()`                                             | `map()`                                        |
// | -------------------------- | ------------------------------------------------------- | ---------------------------------------------- |
// |  Return Value              | `undefined`                                             | A   new array   with transformed elements      |
// |  Use-case                  | Performing   side effects   (e.g. logging, updating UI) | Creating a   new array   with modified data    |
// |  Chainable                 |  No (returns `undefined`)                               |  Yes (returns an array, can be chained)        |
// |  Modifies original array   |  Not directly (unless you intentionally do so)          |  No (pure function, does not mutate original)  |
// |  Typical usage             | Printing, storing to DB, updating DOM                   | Transforming data, e.g., doubling values       |
