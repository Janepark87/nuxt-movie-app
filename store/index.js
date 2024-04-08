const state = () => ({
	movies: [],
	movie: {},
});

const getters = {
	allMovies: (state) => state.movies,
	singleMovie: (state) => state.movie,
};

const actions = {
	async fetchMovies({ commit }) {
		const { movies } = await getData(
			`/movie/now_playing?api_key=${process.env.NUXT_ENV_MOVIE_API_KEY}&language=en-US&page=1`,
			this.$axios
		);

		commit("SET_MOVIES", movies);
	},
	async searchMovies({ commit }, searchInput) {
		const { movies } = await getData(
			`/search/movie?api_key=${process.env.NUXT_ENV_MOVIE_API_KEY}&language=en-US&page=1&query=${searchInput}`,
			this.$axios
		);

		commit("SET_MOVIES", movies);
	},
	async fetchSingleMovie({ commit }, movieId) {
		console.log("movie id");
		const { movie } = await getData(
			`/movie/${movieId}?api_key=${process.env.NUXT_ENV_MOVIE_API_KEY}&language=en-US`,
			this.$axios
		);

		commit("SET_SINGLE_MOVIE", movie);
	},
};

const mutations = {
	SET_MOVIES: (state, movies) => (state.movies = movies),
	SET_SINGLE_MOVIE: (state, movie) => (state.movie = movie),
};

const getData = async (url, axios) => {
	const res = await axios.get(url);
	return {
		movies: res.data.results,
		movie: res.data,
	};
};

export default {
	state,
	getters,
	actions,
	mutations,
};
