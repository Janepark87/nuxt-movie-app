<template>
	<Loading v-if="$fetchState.pending" />
	<div v-else class="container single-movie">
		<NuxtLink class="button" :to="{ name: 'index' }">Back</NuxtLink>

		<div class="movie-info">
			<div class="movie-img">
				<img
					:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
					alt="movie image"
				/>
			</div>

			<div class="movie-content">
				<h1>Title: {{ movie.title }}</h1>
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
import axios from "axios";

export default {
	name: "MovieDetail",
	head() {
		return {
			title: `Movie - ${this.movie.title}`,
		};
	},
	data() {
		return {
			movie: "",
		};
	},
	async fetch() {
		await this.getSingleMovie();
	},
	fetchDelay: 1000,
	methods: {
		async getSingleMovie() {
			try {
				const result = await axios.get(
					`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=afd63acc2ce660b5f1201e831ad4db80&language=en-US`
				);

				this.movie = result.data;
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>
