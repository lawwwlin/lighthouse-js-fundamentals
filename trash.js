const smartGarbage = function (trash, bins) {
  if (trash == "waste") {
    bins.waste++;
  } else if (trash == "recycling") {
    bins.recycling++;
  } else {
    bins.compost++;
  }
}

var bins = {
  waste: 0,
  recycling: 0,
  compost: 0,
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
