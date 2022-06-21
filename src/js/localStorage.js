const cardBox = document.querySelector('.film-card__box');
cardBox.addEventListener('click', addWatched);
cardBox.addEventListener('click', addQueue);
function addWatched(e) {
  if (!e.target.closest('.description-button__watched')) {
    return;
  }
  const getFilmId = e.target.closest('.description-button__watched').dataset.id;
  const films = JSON.parse(localStorage.getItem('watched') || '[]');
  const film = getFilmId;

  if (films.includes(film)) {
    return;
  }

  films.push(film);
  localStorage.setItem('watched', JSON.stringify(films));
  alert('Ви дадали даний фільм до Watched');
}
function addQueue(e) {
  if (!e.target.closest('.description-button__queue')) {
    return;
  }
  const getFilmId = e.target.closest('.description-button__queue').dataset.id;
  const films = JSON.parse(localStorage.getItem('queue') || '[]');
  const film = getFilmId;

  if (films.includes(film)) {
    return;
  }

  films.push(film);
  localStorage.setItem('queue', JSON.stringify(films));
  alert('Ви дадали даний фільм до Queue');
}