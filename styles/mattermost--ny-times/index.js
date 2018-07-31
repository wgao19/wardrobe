// disable current styles
console.log("running cleaner", document.querySelectorAll("style"));
setTimeout(() => {
  console.log("called");
  document
    .querySelectorAll("style")
    .forEach(node => document.head.removeChild(node));
}, 2000);
