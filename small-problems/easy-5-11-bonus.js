// Further Exploration
/* How would you approach this problem if you were allowed to use
   JavaScript's Date class? Suppose you also needed
   to consider the day of week? */

// Code
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

// It's never going to be 24 a clock.
const NEGATIVE_OFFSET = 1;

function timeOfDay(integer) {
  const midnightSunday = new Date('January 10, 2021 00:00:00');

  let hours = Math.abs(Math.floor(integer / MINUTES_PER_HOUR));
  let minutes = integer % MINUTES_PER_HOUR;

  while (hours > HOURS_PER_DAY) {
    hours -= HOURS_PER_DAY;
  }

  if (integer < 0) {
    hours = -hours;
    hours += NEGATIVE_OFFSET;
  }

  midnightSunday.setHours(hours, minutes);

  return midnightSunday.toString();
}

console.log(timeOfDay(0)); // '00:00'
console.log(timeOfDay(-3)); // 23:57'
console.log(timeOfDay(35)); // '00:35'
console.log(timeOfDay(-1437)); // '00:03'
console.log(timeOfDay(3000)); // '02:00'
console.log(timeOfDay(800)); // '13:20'
console.log(timeOfDay(-4231)); //' 01:29'
console.log(timeOfDay(-1480));
