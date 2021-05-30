const judgeVegetable = function (vegetables, metric) {
  let vegie = { submitter: "", redness: 0, plumpness: 0 }
  if (metric == "redness") {
    let r = 0
    for (let veg in vegetables) {
      if (vegetables[veg].redness > r) {
        r = vegetables[veg].redness;
        vegie.submitter = vegetables[veg].submitter;
        vegie.redness = vegetables[veg].redness;
        vegie.plumpness = vegetables[veg].plumpness;
      }
    }
  } else if (metric == "plumpness") {
    let p = 0
    for (let veg in vegetables) {
      if (vegetables[veg].plumpness > p) {
        p = vegetables[veg].plumpness;
        vegie.submitter = vegetables[veg].submitter;
        vegie.redness = vegetables[veg].redness;
        vegie.plumpness = vegetables[veg].plumpness;
      }
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

