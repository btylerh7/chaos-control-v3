<script lang="ts">
	import Album from "$lib/components/collection/Album.svelte";
	const { data } = $props();
	const MdComp = data.description;
</script>

<Album
	title={data.title}
	artist={data.artist}
	cover={data.cover}
	releaseDate={data.releaseDate}
	urlPath={data.url}
/>

<div></div>
