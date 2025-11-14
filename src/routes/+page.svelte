<script lang="ts">
	import Strudel from '$lib/components/Strudel.svelte';
	import StrudelButtons from '$lib/components/StrudelButtons.svelte';
	const { data } = $props();
</script>

<h1>Strudel Showcase Page</h1>
<StrudelButtons isHomepage={true} />
<Strudel song={data.song} isDisplayed={false} />
