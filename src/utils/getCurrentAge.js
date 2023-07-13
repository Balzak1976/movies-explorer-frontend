const A_YEAR_IN_MS = 1000 * 60 * 60 * 24 * 365;

export function getCurrentAge({birthYear, birthMonth, birthDay}) {
  const currentDate = Date.now();
  const myBirthDay = new Date(birthYear, birthMonth - 1, birthDay);
  const exactCurrentAge = (currentDate - myBirthDay.getTime()) / A_YEAR_IN_MS;

  return Math.floor(exactCurrentAge);
}
