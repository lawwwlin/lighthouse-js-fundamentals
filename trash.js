var bins = {
  waste: 0,
  recycling: 0,
  compost: 0,
}

const smartGarbage = function (trash, bins) {
  if (trash == "waste") {
    bins.waste++;
  } else if (trash == "recycling") {
    bins.recycling++;
  } else {
    bins.compost++;
  }
}


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 })
console.log(bins.waste);
console.log(bins.recycling);
console.log(bins.compost);
