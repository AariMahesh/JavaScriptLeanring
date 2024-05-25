import { add } from "./add.js";
import { sub } from "./sub.js";
import { mul } from "./mul.js";
import { mod } from "./mod.js";

let f = "mod";
let a = 10;
let b = 2;
switch (f) {
  case "add":
    add(a, b);
    break;
  case "mul":
    mul(a, b);
    break;
  case "sub":
    sub(a, b);
    break;
  case "mod":
    mod(a, b);
    break;
  default:
    console.log("sucess");
}
