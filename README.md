```JavaScript
Object.prototype.todo = function (fn) {
  const R = function (r) { this.result = r }
  const r = new R(fn(this.constructor === Object.prototype.todo ? this.result : this))
  r.constructor = Object.prototype.todo
  return r
};
```

```JavaScript
{ x: 1 }.todo(add).todo(add).todo(add).result // { x: 4 }
(1).todo(add2).todo(add2).todo(add2).result // 7

function add (x) {
  return { x: x.x + 1 }
}

function add2 (x) {
  return x + 2
}
```
