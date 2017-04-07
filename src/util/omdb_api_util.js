import qs from 'query-string';

export const searchMovies = (title, year, type, page = 1) => {
  let query = qs.stringify({
    s: title,
    y: year,
    type: type,
    page: page,
  });

  return $.ajax({
    method: 'GET',
    url: `https://www.omdbapi.com/?${query}`,
  });
};
