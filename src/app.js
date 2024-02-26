/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  let newExcuse = () => {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let whoNew = Math.floor(Math.random() * who.length);
    let actionNew = Math.floor(Math.random() * action.length);
    let whatNew = Math.floor(Math.random() * what.length);
    let whenNew = Math.floor(Math.random() * when.length);

    return (
      who[whoNew] +
      " " +
      action[actionNew] +
      " " +
      what[whatNew] +
      " " +
      when[whenNew]
    );
  };
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = newExcuse();
  });
};
