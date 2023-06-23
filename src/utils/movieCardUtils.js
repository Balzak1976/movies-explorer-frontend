function getFormattedDuration(duration) {
  const hours = Math.floor(duration / 60); // целое количество часов
  const minute = duration % 60; // остаток от деления на 60
  return `${hours}ч${minute > 0 ? minute : '0' + minute}м`;
}

export { getFormattedDuration };
