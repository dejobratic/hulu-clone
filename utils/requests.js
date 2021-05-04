const apiKey = process.env.API_KEY

export default {
  Trending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  },
  TopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  },
  Action: {
    title: "Action",
    url: `/discover/movie?api_key=${apiKey}&with-genres=28`,
  },
  Comedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${apiKey}&with-genres=35`,
  },
  Horror: {
    title: "Horror",
    url: `/discover/movie?api_key=${apiKey}&with-genres=27`,
  },
  Romance: {
    title: "Romance",
    url: `/discover/movie?api_key=${apiKey}&with-genres=10749`,
  },
  Mystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${apiKey}&with-genres=9648`,
  },
  SciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${apiKey}&with-genres=878`,
  },
  Western: {
    title: "Western",
    url: `/discover/movie?api_key=${apiKey}&with-genres=37`,
  },
  Animation: {
    title: "Animation",
    url: `/discover/movie?api_key=${apiKey}&with-genres=16`,
  },
  TVShows: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${apiKey}&with-genres=10770`,
  },
}
