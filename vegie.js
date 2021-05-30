const judgeVegetable = function (vegetables, metric) {
  let vegie = { submitter: "", metric: 0 }
  let m = 0
  for (let veg in vegetables) {
    if (vegetables[veg].metric > m) {
      m = vegetables[veg].metric;
      vegie.submitter = vegetables[veg].submitter;
      vegie.metric = vegetables[veg].metric;
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

