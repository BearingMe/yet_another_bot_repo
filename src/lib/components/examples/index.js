const { Components } = require("./components");

const components = new Components();

components.add(function (next) {
  console.log("1");
  next();
});

components.add(function (next) {
  console.log("2");
  next();
});

components.add(function (next) {
  console.log("3");
  next();
});

components.add(function () {
  console.log("4");
});

components.run();
