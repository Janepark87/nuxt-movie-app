<template>
	<div class="container search">
		<input
			type="text"
			placeholder="Search"
			v-model.lazy="searchInput"
			@keyup.enter="onSearch"
			:class="searchInput !== '' ? 'searching' : ''"
		/>
		<button v-show="searchInput !== ''" @click="onClear" class="button">
			Clear
		</button>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "Search",
	data() {
		return {
			searchInput: "",
		};
	},
	methods: {
		...mapActions(["searchMovies"]),
		onSearch() {
			this.searchMovies(this.searchInput);
			this.$emit("checkSearchInput", this.searchInput);
		},
		onClear() {
			this.searchInput = "";
		},
	},
};
</script>
