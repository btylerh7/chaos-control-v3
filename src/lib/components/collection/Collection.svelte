<script lang="ts">
	import Album from "./Album.svelte";

	const { albums } = $props();
</script>

<section>
	{#each albums as album}
		<Album
			title={album.title}
			artist={album.artist}
			cover={album.cover}
			releaseDate={album.releaseDate}
			urlPath={album.urlPath}
		/>
	{/each}
</section>

<style>
	section {
		display: grid;
		@media (width > 700px) {
			grid-template-columns: repeat(2, 1fr);
			justify-content: center;
			align-items: center;
		}
		@media (width > 900px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
