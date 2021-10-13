function range(start, end, step){
  if (step < 0){
    return [];
  }

  let r = [];
  for(let i = start; i < end + 1; i += step){
    r.push(i);
  }
  return r;
}


console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));