const finalPosition = function (moves) {
  let position = [0, 0];
  for (const move of moves) {
    if (move === "north") {
      position[1]++;
    } else if (move === "south") {
      position[1]--;
    } else if (move === "west") {
      position[0]--;
    } else {
      position[0]++;
    }
  }
} 

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

let position = finalPosition(moves);
for (const p of position) {
  console.log(p);
}
