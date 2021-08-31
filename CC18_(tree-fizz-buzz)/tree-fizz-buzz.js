"use strict";

let fizzBuzz = (tree) => {
  let current = tree.root;
  let output = [];
  if (!current) return false;
  let trevers = (node) => {
    if (node.value % 3 == 0 && node.value % 5 == 0) {
      node.value = "fizzBuzz";
      output.push(node.value);
    } else if (node.value % 3 == 0) {
      node.value = "fizz";
      output.push(node.value);
    } else if ((node.value & 5) == 0) {
      node.value = "buzz";
      output.push(node.value);
    } else {
      output.push(node.value.toString());
    }

    if (node.left) trevers(node.left);
    if (node.right) trevers(node.right);
  };
  trevers(current);
  return output;
};
module.exports = fizzBuzz;