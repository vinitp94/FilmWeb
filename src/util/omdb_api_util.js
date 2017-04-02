import qs from 'query-string';

export const searchMovies = (title, year, type, page = 1) => {
  let query = qs.stringify({
    s: title,
    y: year,
    type: type,
    page: page
  });

  return $.ajax({
    method: 'GET',
    url: `http://www.omdbapi.com/?${query}`,
  });
};
