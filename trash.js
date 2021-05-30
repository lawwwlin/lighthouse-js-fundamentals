const smartGarbage = function (trash, bins) {
  if (trash == "waste") {
    waste++;
  } else if (trash == "recycling") {
    recycling++;
  } else {
    compost++;
  }
}

var bins = {
  waste: 0,
  recycling: 0,
  compost: 0,
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
