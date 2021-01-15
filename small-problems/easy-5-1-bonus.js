// Further Exploration
/* Since degrees are normally restricted to the range 0-360, can you
   modify the code so it returns a value in the appropriate range when
   the input is less than 0 or greater than 360? */

// Code
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(floatingPointDegrees) {
  while (floatingPointDegrees < 0 || floatingPointDegrees > 360) {
    if (floatingPointDegrees < 0) {
      floatingPointDegrees += 360;
    } else {
      floatingPointDegrees -= 360;
    }
  }

  const degrees = Math.floor(floatingPointDegrees);
  const floatingPointMinutes = (floatingPointDegrees % 1) * MINUTES_PER_DEGREE;
  const minutes = Math.floor(floatingPointMinutes);
  const seconds = Math.floor((floatingPointMinutes % 1) * SECONDS_PER_MINUTE);

  const minutesPadded = String(minutes).padStart(2, '0');
  const secondsPadded = String(seconds).padStart(2, '0');

  return `${degrees}˚${minutesPadded}'${secondsPadded}"`;
}

console.log(dms(-1)); // 359°00'00"
console.log(dms(400)); // 40°00'00"
console.log(dms(-40)); // 320°00'00"
console.log(dms(-420)); // 300°00'00"
