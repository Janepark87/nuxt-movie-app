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
		const res = await this.$axios.get(
			`/movie/now_playing?api_key=${process.env.NUXT_ENV_MOVIE_API_KEY}&language=en-US&page=1`
		);

		commit("SET_MOVIES", res.data.results);
	},
	async searchMovies({ commit }, searchInput) {
		const res = await this.$axios.get(
			`/search/movie?api_key=${process.env.NUXT_ENV_MOVIE_API_KEY}&language=en-US&page=1&query=${searchInput}`
		);

		commit("SET_MOVIES", res.data.results);
	},
	async fetchSingleMovie({ commit }, movieId) {
		const res = await this.$axios.get(
			`/movie/${movieId}?api_key=${process.env.NUXT_ENV_MOVIE_API_KEY}&language=en-US`
		);

		commit("SET_SINGLE_MOVIE", res.data);
	},
};

const mutations = {
	SET_MOVIES: (state, movies) => (state.movies = movies),
	SET_SINGLE_MOVIE: (state, movie) => (state.movie = movie),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
