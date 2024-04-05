<template>
	<div class="home">
		<Hero />

		<!-- Loading -->
		<!-- <Loading v-if="$fetchState.pending" /> -->

		<div class="container movies">
			<!-- display searched movies -->
			<!-- <SearchMovieList v-if="searchInput !== ''" /> -->

			<!-- display movies -->
			<!-- <MovieList v-else /> -->

			<MovieList :movies="$store.state.movies" />
		</div>
	</div>
</template>

<script>
export default {
	name: "Movies",
	head() {
		return {
			title: "Movie App - Latest Streaming Movie Info",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"Get all the latest streaming movies in theaters & online",
				},
				{
					hid: "keywords",
					name: "keywords",
					content: "movies, stream, steaming",
				},
			],
		};
	},
	async fetch() {
		await this.getMovies();
	},
	methods: {
		async getMovies() {
			try {
				const res = await this.$axios.get(
					`/movie/now_playing?api_key=${process.env.NUXT_ENV_MOVIE_API_KEY}&language=en-US&page=1`
				);
				const movies = res.data.results;
				this.$store.commit("SET_MOVIES", movies);
			} catch (error) {
				console.error("Error fetching movies:", error);
			}
		},
	},
};
</script>
