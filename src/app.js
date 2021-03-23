/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "rave"];

  function GenerateDomain() {
    pronoun.forEach(element1 => {
      adj.forEach(element2 => {
        noun.forEach(element3 => {
          console.log(element1.concat(element2.concat(element3, ".com")));
        });
      });
    });
  }

  GenerateDomain();
};
