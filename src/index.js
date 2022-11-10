import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  //grabbing ele with id of main then passing it into example class
  new Example(main);
});
