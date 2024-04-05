<template>
	<Loading v-if="$fetchState.pending" />
	<div v-else class="container single-movie">
		<NuxtLink class="button" to="/">Back</NuxtLink>
		<div class="movie-info">
			<div :class="`movie-img ${!movie.poster_path && 'no-img'}`">
				<img
					:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
					alt="movie image"
				/>
			</div>

			<div class="movie-content">
				<h1>{{ movie.title }}</h1>
				<p class="movie-fact tagline">
					<span>Tagline:</span> "{{ movie.tagline }}"
				</p>

				<p class="movie-fact">
					<span>Release:</span>
					{{
						new Date(movie.release_date).toLocaleString("en-us", {
							month: "long",
							day: "numeric",
							year: "numeric",
						})
					}}
				</p>

				<p class="movie-fact">
					<span>Duration:</span> {{ movie.runtime }} minutes
				</p>

				<p class="movie-fact">
					<span>Revenue:</span>
					{{
						movie.revenue.toLocaleString("en-us", {
							style: "currency",
							currency: "USD",
						})
					}}
				</p>

				<p class="movie-fact">
					<span>Overview:</span> {{ movie.overview }}
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
	name: "MovieDetail",
	head() {
		return {
			title: `Movie - ${this.movie.title}`,
		};
	},
	computed: {
		...mapState(["movie"]),
	},
	async fetch() {
		await this.fetchSingleMovie(this.$route.params.id);
	},
	fetchDelay: 1000,
	methods: {
		...mapActions(["fetchSingleMovie"]),
	},
};
</script>
