<script lang="ts">
	import { onMount } from 'svelte';

	let { song } = $props();

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

<strudel-editor code={song}> </strudel-editor>
