const judgeVegetable = function (vegetables, metric) {
  let vegie = { submitter: "", m: 0 }
  let met = 0
  for (let veg in vegetables) {
    if (vegetables[veg].metric > met) {
      met = vegetables[veg].metric;
      vegie.submitter = vegetables[veg].submitter;
      vegie.m = vegetables[veg].metric;
    }
  }
  return vegie.submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));

