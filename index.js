const franc = require("franc");
const langs = require("langs");

function lanfind(x) {
  let treedig = franc(x);
  if (treedig !== "und") {
    let fulllan = langs.where("3", treedig)?.name;
    return fulllan;
  } else {
    return "couldnt guess the languagas";
  }
}
console.log(lanfind("hi"));
