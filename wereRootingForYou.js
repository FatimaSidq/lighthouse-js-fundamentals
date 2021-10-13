function judgeVegetable(vegetables, metric){
  let highest = vegetables[0];
  for(let vegetable of vegetables){
    if (vegetable[metric] > highest.metric){
      highest = vegetable;
    }
  }
  return highest.submitter
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

console.log(judgeVegetable(vegetables, metric))