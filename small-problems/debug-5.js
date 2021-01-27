function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

console.log(range(10, 20));
console.log(range(5));

/* First, when you define the same function, the later invocation is the one
   which overwrites it, so that's a no go.

   Secondly, you would think it would be possible to set a default parameter for
   start, this is not the case! Parameters are set left-to-right, which means
   they'll overwrite default parameters even if there are later parameters
   without defaults! */

// Further Exploration
// The assignment order is wrong, end = start should be higher.
// No default parameters are set, so if you omit one, the function won't work.
