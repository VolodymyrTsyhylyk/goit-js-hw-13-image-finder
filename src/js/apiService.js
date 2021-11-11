const BASE_URL = 'https://pixabay.com/api/';
const KEY = '24218095-e122c3f543388ef85122eabf2';

export default class ApiServise {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  fetchPictures() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  clearInput() {
    this.searchQuery.innerHTML = '';
  }
}

// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
