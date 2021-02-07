let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);

/* On line 1, the variable greeting is initialized to the String value 'Hello'.
   On line 3, the code initiates a continuous while loop that will continue to
   loop forever unless a break or return statement is utilized. This loop
   executes approximately one (1) time, and on its only iteration, it reassigns
   the global variable greeting to the string value 'Hi'. After this, the break
   keyword terminates the loop. On line 8, the value 'Hi' is logged to the
   terminal. This program demonstrates variable scope, because it shows
   how a global variable can be accessed and reassigned inside a nested scope.
 */
