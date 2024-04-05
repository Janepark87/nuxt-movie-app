export const state = () => ({
	movies: [],
	movie: {},
});

export const mutations = {
	SET_MOVIES(state, movies) {
		state.movies = movies;
	},
	SET_CURRENT_MOVIE(state, movie) {
		state.movie = movie;
	},
};
