/* The following code snippet was shared by Bob Rhodes which matches
   all characters not followed by the same character */

let regex = RegExp(/(.)(?!\1)/g);
