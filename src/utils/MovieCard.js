export class MovieCard {
  constructor({ id, name, link, trailerLink, duration }) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.trailerLink = trailerLink;
    this.duration = duration;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }

  isShort() {
    return this.duration <= 40;
  }

  getFormattedDuration() {
    const hours = Math.floor(this.duration / 60); // целое количество часов
    const minute = this.duration % 60; // остаток от деления на 60
    return `${hours}ч${minute > 0 ? minute : '0' + minute}м`;
  }
}
