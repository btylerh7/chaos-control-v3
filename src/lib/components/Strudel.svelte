<script lang="ts">
	import { onMount } from 'svelte';

	let { song, isDisplayed } = $props();

	onMount(async () => {
		// @ts-ignore
		const strudel = await import('@strudel/repl');
		// await import('@strudel/web');
		// await initStrudel({
		// 	prebake: () => samples('github:tidalcycles/dirt-samples')
		// });
		await strudel.prebake();
	});
</script>

<div style:display={isDisplayed == false ? 'none' : ''}>
	<strudel-editor id="repl" code={song}> </strudel-editor>
</div>
