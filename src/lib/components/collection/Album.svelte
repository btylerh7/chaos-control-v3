<script lang="ts">
	import { asset } from "$app/paths";
	const { title, artist, cover, releaseDate, urlPath } = $props();
	const coverSrc = asset(`/albums/${artist}/${cover}`);
</script>

<a class="collection-link" href={`/collection/${urlPath}`}>
	<article class="album" {title}>
		<div class="cd-wrapper">
			<div class="cd-cover">
				<img class="album-cover" alt={`${title} by ${artist} album cover`} src={coverSrc} />
			</div>
			<div class="cd-case"></div>
		</div>
		<div>
			<h2>{title}</h2>
			<p>{artist} - ${releaseDate}</p>
		</div>
	</article>
</a>
