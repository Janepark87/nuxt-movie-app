<template>
	<div class="home">
		<Hero />

		<Loading v-if="$fetchState.pending" />

		<Search @checkSearchInput="handleSearchInput" />

		<MovieList :movies="allMovies" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
	computed: {
		...mapGetters(["allMovies"]),
	},
	async fetch() {
		await this.handleSearchInput();
	},
	methods: {
		...mapActions(["fetchMovies", "searchMovies"]),
		async handleSearchInput(searchInput) {
			if (!searchInput) return await this.fetchMovies();
			await this.searchMovies(searchInput);
		},
	},
};
</script>
