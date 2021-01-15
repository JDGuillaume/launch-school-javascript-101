// Further Exploration
// How would these methods change if you were allowed to use the Date class?

// Code
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const NEGATIVE_OFFSET = 1;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(':').map(num => Number(num));
  return (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  const midnightSunday = new Date('January 10, 2021 00:00:00');

  let [hours, minutes] = timeStr.split(':').map(num => Number(num));

  if (hours !== 0 && hours !== 24 && minutes !== 0) {
    hours = HOURS_PER_DAY - hours - NEGATIVE_OFFSET;
    minutes = MINUTES_PER_HOUR - minutes;
  }

  midnightSunday.setHours(hours, minutes);
  return midnightSunday.getHours() * MINUTES_PER_HOUR + minutes;
}

console.log(afterMidnight('00:00') === 0);
console.log(beforeMidnight('00:00') === 0);
console.log(afterMidnight('12:34') === 754);
console.log(beforeMidnight('12:34') === 686);
console.log(afterMidnight('24:00') === 0);
console.log(beforeMidnight('24:00') === 0);
