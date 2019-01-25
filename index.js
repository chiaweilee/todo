Object.prototype.todo = function (fn) {
  const R = function (r) { this.result = r; };
  const r = new R(fn(this.constructor === Object.prototype.todo ? this.result : this));
  r.constructor = Object.prototype.todo;
  return r;
};

console.log({ x: 1 }
  .todo(add)
  .todo(add)
  .todo(add)
  .result);

console.log((1)
  .todo(add2)
  .todo(add2)
  .todo(add2)
  .result);

function add (x) {
  return { x: x.x + 1 };
}

function add2 (x) {
  return x + 2
}
