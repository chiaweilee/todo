```JavaScript
Object.prototype.todo = function (f, ...argv) {
  const R = function (r) { this.result = r; };
  const r = new R(f.apply(null, [this.constructor === Object.prototype.todo ? this.result : this, ...argv]));
  r.constructor = Object.prototype.todo;
  return r;
};
```

```JavaScript
const a = { x: 1 }
  .todo(addObj)
  .todo(addObj, 2)
  .todo(addObj, 3)
  .result;

const b = (1)
  .todo(add)
  .todo(add, 2)
  .todo(add, 3)
  .result;

// a: { x: 7 }
// b: 7

function addObj(x, y = 1) {
  return { x: x.x + y };
}

function add(x, y = 1) {
  return x + y;
}
```
