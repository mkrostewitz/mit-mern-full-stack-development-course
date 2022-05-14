const locations = [ ];
const makePoint = function makePoint(x, y) {
  let p = {x: x, y: y};
  return p
}

const model_factory = function model_factory(n){
  for(let i = 0;i < n; i++){
    let p = makePoint(i, i);
    locations.push(p);
  }
}
model_factory(3);
console.log('locations:' + JSON.stringify(locations))