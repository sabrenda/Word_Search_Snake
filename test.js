const puzzle = [
  ["a", "k", "f", "o", "x", "e", "q"],
  ["s", "z", "y", "w", "a", "h", "p"],
  ["i", "t", "c", "k", "e", "t", "n"],
  ["o", "t", "s", "d", "h", "o", "h"],
  ["s", "e", "x", "g", "s", "t", "a"],
  ["u", "r", "p", "i", "w", "e", "u"],
  ["a", "s", "b", "n", "u", "i", "r"],
];


// release-1 [ рекурсионная змейка ]
//------------------------------------------------------------------
// DONEDONEDONE!!!!

function ft_proverkaCoordinat(coordinates, x, y) {
  for (let i = 0; i < coordinates.length; i++) {
    if (coordinates[i][0] === x && coordinates[i][1] === y)
      return false;
  }
  return true;
}

function fn_around(word, puzzle, i, x, y, coordinates) {
  if (word.length - 1 <= i)
    return true;

  coordinates.push([x, y])

  if ((x - 1 >= 0 && y - 1 >= 0) && puzzle[x - 1][y - 1] === word[i + 1])
    if (ft_proverkaCoordinat(coordinates, x - 1, y - 1) && fn_around(word, puzzle, i + 1, x - 1, y - 1, coordinates))
      return true; // 1
  if ((x - 1 >= 0 && y >= 0) && puzzle[x - 1][y] === word[i + 1])
    if (ft_proverkaCoordinat(coordinates, x - 1, y) && fn_around(word, puzzle, i + 1, x - 1, y, coordinates))
      return true; // 2
  if ((x - 1 >= 0 && y + 1 <= puzzle.length - 1) && puzzle[x - 1][y + 1] === word[i + 1])
    if (ft_proverkaCoordinat(coordinates, x - 1, y + 1) && fn_around(word, puzzle, i + 1, x - 1, y + 1, coordinates))
      return true; // 3
  if ((x >= 0 && y + 1 <= puzzle.length - 1) && puzzle[x][y + 1] === word[i + 1])
    if (ft_proverkaCoordinat(coordinates, x, y + 1) && fn_around(word, puzzle, i + 1, x, y + 1, coordinates))
      return true; // 6
  if ((x + 1 <= puzzle.length - 1 && y + 1 <= puzzle.length - 1) && puzzle[x + 1][y + 1] === word[i + 1])
    if (ft_proverkaCoordinat(coordinates, x + 1, y + 1) && fn_around(word, puzzle, i + 1, x + 1, y + 1, coordinates))
      return true; // 9
  if ((x + 1 <= puzzle.length - 1 && y - 1 >= 0) && puzzle[x + 1][y - 1] === word[i + 1])
    if (ft_proverkaCoordinat(coordinates, x + 1, y - 1) && fn_around(word, puzzle, i + 1, x + 1, y - 1, coordinates))
      return true; // 7
  if ((x + 1 <= puzzle.length - 1 && y >= 0) && puzzle[x + 1][y] === word[i + 1])
    if (ft_proverkaCoordinat(coordinates, x + 1, y) && fn_around(word, puzzle, i + 1, x + 1, y, coordinates))
      return true; // 8
  if ((x >= 0 && y - 1 >= 0) && puzzle[x][y - 1] === word[i + 1])
    if (ft_proverkaCoordinat(coordinates, x, y - 1) && fn_around(word, puzzle, i + 1, x, y - 1, coordinates))
      return true; // 4
  return false
}

function snakingInclude(word, puzzle) {
  let coordinates = [];
  let arrCord = [];

  for (let i = 0, k = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      if (word[0] === puzzle[i][j]) {
        coordinates[k] = [i, j];
        k++;
      }
    }
  }

  for (let j = 0; j < coordinates.length; j++)
    if (fn_around(word, puzzle, 0, coordinates[j][0], coordinates[j][1], arrCord))
      return true
  return false;
}
