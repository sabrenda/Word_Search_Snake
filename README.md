## Snake word search

a search algorithm that will tell if the input word can be found in a word search puzzle

#### Puzzle data structure

```javascript
let puzzle = [
  ["a", "k", "f", "o", "x", "e", "s"],
  ["s", "o", "a", "w", "a", "h", "p"],
  ["i", "t", "c", "k", "e", "t", "n"],
  ["o", "t", "s", "d", "h", "o", "h"],
  ["s", "e", "x", "g", "s", "t", "a"],
  ["u", "r", "p", "i", "w", "e", "u"],
  ["z", "s", "b", "n", "u", "i", "r"]
]
```
Representing a word search puzzle as a nested array

You will represent your word search puzzle as nested arrays. The puzzle as a whole will be represented by an outer array. Each row in the puzzle will be represented by one of the internal arrays

**Rules**
- Each letter in the puzzle can only be used once per word.
