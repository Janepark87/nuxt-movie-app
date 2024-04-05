const state = () => ({
	movies: [],
	movie: {},
});

const getters = {
	allMovies: (state) => state.movies,
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
		console.log(res.data.results);
		commit("SET_MOVIES", res.data.results);
	},
};

const mutations = {
	SET_MOVIES: (state, movies) => (state.movies = movies),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
