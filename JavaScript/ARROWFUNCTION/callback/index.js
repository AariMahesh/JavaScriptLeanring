function display(a) {
  console.log("hello");
  return a;
}
// display();
var man = (z) => {
  console.log("inside call back");
  return z;
};
// man();
var m = function pr(a) {
  return a;
};
//m(1, 2);
console.log(m(man(display(12))));
function calculate(z) {
  return z;
}
function add() {
  return "Add";
}
console.log(calculate(add()));
