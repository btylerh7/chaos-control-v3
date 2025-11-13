<script lang="ts">
	import Strudel from '$lib/components/Strudel.svelte';
	let { data } = $props();
</script>

<div>
	<Strudel song={data.song} />
</div>
