<template>
	<div id="movie-grid" class="movies-grid">
		<div class="movie" v-for="(movie, index) in movies" :key="index">
			<div class="movie-img">
				<img
					:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
					alt="movie image"
				/>
				<p class="review">{{ movie.vote_average.toFixed(1) }}</p>
				<p class="overview">{{ movie.overview }}</p>
			</div>

			<div class="info">
				<p class="title">
					{{ movie.title.slice(0, 25) }}
					<span v-if="movie.title.length > 25">...</span>
				</p>

				<p class="release">
					<span>Released:</span>
					{{
						new Date(movie.release_date).toLocaleString("en-us", {
							month: "long",
							day: "numeric",
							year: "numeric",
						})
					}}
				</p>

				<nuxt-link
					class="button button-light"
					:to="{
						name: 'movies-id',
						params: { id: movie.id },
					}"
					>Get More Info</nuxt-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["movies"],
};
</script>
