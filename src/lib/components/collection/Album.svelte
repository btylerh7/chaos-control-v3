<script lang="ts">
	import { asset } from "$app/paths";
	import CdCover from "./CdCover.svelte";
	const { title, artist, cover, releaseDate, urlPath } = $props();
	const coverSrc = asset(`/albums/${artist}/${cover}`);
</script>

<a class="collection-link" href={`/collection/${urlPath}`}>
	<article class="album" {title}>
		<CdCover {title} {artist} {cover} />
		<div>
			<h2>{title}</h2>
			<p>{artist} - {releaseDate}</p>
		</div>
	</article>
</a>

<style>
	.collection-link {
		justify-self: center;
		color: white;
		&:visited {
			color: white;
		}
		& > * {
			text-align: center;
		}
	}
	.album {
		display: grid;
		justify-content: start;
		gap: 0;
		/* width: fit-content; */
		padding: 1rem;
		/* border-radius: 5px; */
		border: 1px solid var(--text);
		position: relative;

		& div > * {
			margin: 0;
		}
	}
</style>
