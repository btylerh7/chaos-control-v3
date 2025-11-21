<script lang="ts">
	import CdCover from "$lib/components/collection/CdCover.svelte";
	import Markdown from "$lib/components/collection/Markdown.svelte";
	const { data } = $props();
	const { title, artist, releaseDate, url, addedDate, description } = data;
</script>

<section>
	<CdCover {artist} {title} />
	<div class="metadata">
		<h1>{title}</h1>
		<p>Released by {artist}</p>
		<p>Released in {releaseDate}</p>
		{#if addedDate}
			<p>Added to collection on {addedDate}</p>
		{/if}
	</div>
</section>
<Markdown text={description} />

<style>
	section {
		display: grid;
		grid-template-columns: 1fr;
		text-align: center;
		@media (width > 700px) {
			grid-template-columns: 1fr 2fr;
			text-align: left;
		}
		& h1 {
			padding-top: 0.5em;
			margin-bottom: 0.2em;
		}
		& p {
			margin-block: 0;
		}
	}
</style>
