
/* function like() {
  this.isLiked = !this.isLiked;
} */

function isShort(duration) {
  return duration <= 40;
}

function getFormattedDuration(duration) {
  const hours = Math.floor(duration / 60); // целое количество часов
  const minute = duration % 60; // остаток от деления на 60
  return `${hours}ч${minute > 0 ? minute : '0' + minute}м`;
}

export { isShort, getFormattedDuration }