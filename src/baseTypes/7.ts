/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  WORKING,
  DAY_OFF,
}

function isWeekend(day: Day): boolean {
  return day === Day.DAY_OFF;
}

const today: Day = Day.WORKING;
const isTodayWeekend: boolean = isWeekend(today);

console.log(isTodayWeekend);
