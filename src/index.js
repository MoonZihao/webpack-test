import "./style.css";
import { func } from "./index1.js";
import { add } from "./main.js";
// import bg from "./bg.png";

console.log("dashdfas");

function com() {
  let ele = document.createElement('div');
  ele.classList.add('block');

  // let img = new Image();
  // img.src = bg;
  // ele.appendChild(img);

  add();

  return ele;
}

document.body.appendChild(com());
func();