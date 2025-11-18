<script lang="ts">
	import Album from "$lib/components/collection/Album.svelte";
	const { data } = $props();
</script>

<Album
	title={data.title}
	artist={data.artist}
	cover={data.cover}
	releaseDate={data.releaseDate}
	urlPath={data.url}
/>
