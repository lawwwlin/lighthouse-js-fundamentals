const smartGarbage = function (trash, bins) {
  let bin = {waste: bins.waste, recycling: bins.recycling, compost: bins.compost}
  if (trash == "waste") {
    waste = bins.waste + 1;
  } else if (trash == "recycling") {
    recycling = bins.recycling + 1;
  } else {
    compost = bins.compost + 1;
  }
  return bin;
}


smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 })
