<script lang="ts">
	import CdCover from "$lib/components/collection/CdCover.svelte";
	import Markdown from "$lib/components/collection/Markdown.svelte";
	const { data } = $props();
	const { title, artist, cover, releaseDate, url, description } = data;
</script>

<section>
	<CdCover {artist} {title} {cover} />
	<div class="metadata">
		<h1>{title}</h1>
		<p>Released by {artist}</p>
		<p>Released on {releaseDate}</p>
	</div>
</section>
<Markdown text={description} />

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 2fr;
		& h1 {
			padding-top: 0.5em;
			margin-bottom: 0.2em;
		}
		& p {
			margin-block: 0;
		}
	}
</style>
