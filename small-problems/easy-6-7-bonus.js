// Further Exploration
/* What if the person has one or more middle names? Refactor the
   current solution so that it can accommodate this;
  the middle names should be listed after the first name: */

// Code
function swapName(name) {
  const nameArray = name.split(' ');
  nameArray.unshift(nameArray.pop());
  nameArray[0] += ',';
  return nameArray.join(' ');
}

console.log(swapName('Karl Oskar Henriksson Ragvals')); // "Ragvals, Karl Oskar Henriksson"
