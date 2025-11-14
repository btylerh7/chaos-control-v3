<script lang="ts">
	import Strudel from '$lib/components/Strudel.svelte';
	import StrudelButtons from '$lib/components/StrudelButtons.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>
<div>
	<StrudelButtons isHomepage={false} />
	<Strudel song={data.song} isDisplayed={true} />
</div>
