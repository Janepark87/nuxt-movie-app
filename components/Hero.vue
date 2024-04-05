<template>
	<div class="hero">
		<img src="../assets/img/movieHero.jpg" alt="Hero Image" />
		<div class="text-container">
			<div class="text">
				<span class="mini-heading">Now Streaming</span>
				<h1><span>Now</span> Streaming</h1>
				<a href="#" @click="smoothScroll" class="button">View Movies</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Hero",
	methods: {
		smoothScroll(e) {
			e.preventDefault();
			document.querySelector("#movie-grid").scrollIntoView();
		},
	},
};
</script>
