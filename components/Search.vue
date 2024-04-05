<template>
	<div class="container search">
		<input
			@keyup.enter="$fetch"
			type="text"
			placeholder="Search"
			v-model.lazy="searchInput"
		/>
		<button v-show="searchInput !== ''" @click="clearSearch" class="button">
			Clear Search
		</button>
	</div>
</template>

<script>
export default {
	name: "Search",
};
</script>
