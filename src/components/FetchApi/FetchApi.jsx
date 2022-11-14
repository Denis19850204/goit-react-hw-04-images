const BASE_URL = `https://pixabay.com/api`;
const KEY = `30165080-69dc7af91b4e9c1a4c0e45d49`;

export default function FetchApi(imageSearchName, page, perPage) {
  return fetch(
    `${BASE_URL}/?q=${imageSearchName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
}
